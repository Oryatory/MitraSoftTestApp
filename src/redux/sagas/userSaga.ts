import { takeEvery, put, delay, call, fork } from "@redux-saga/core/effects";
import {
  setUser,
  setUserPosts,
  setUserPostsError,
  setUserPostsIsLoading,
} from "../reducers/userSlice";
import { getUserInfo, getUserPosts } from "../../api";
import { setInitialComments } from "../reducers/commentsSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export function* handleUserPosts(
  action: PayloadAction<number>
): Generator<any, void, any> {
  try {
    yield put(setUserPostsIsLoading(true));
    const data = yield call(getUserPosts, action.payload);
    yield put(setUserPosts(data));
    yield put(setInitialComments(data.length));
    yield delay(500);
    yield put(setUserPostsIsLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* handleUserInfo(
  action: PayloadAction<number>
): Generator<any, void, any> {
  try {
    const data = yield call(getUserInfo, action.payload);

    yield put(setUser(data));

    yield delay(500);
  } catch (error) {
    console.log(error);
  }
}

export function* handleUserSaga(action: PayloadAction<number>) {
  yield fork(handleUserInfo, action);
  yield fork(handleUserPosts, action);
}

export function* watchUserSaga() {
  yield takeEvery("user/fetchUser", handleUserSaga);
}
