import { takeEvery, put, delay, call, fork } from "@redux-saga/core/effects";
import {
  setUser,
  setUserInfoIsLoading,
  setUserPosts,
  setUserPostsError,
  setUserPostsIsLoading,
} from "../reducers/userSlice";
import { getUserInfo, getUserPosts } from "../../api";
import { setInitialComments } from "../reducers/commentsSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { setDisplayedPosts } from "../../redux/reducers/displayedPostsSlice";

export function* handleUserPosts(
  action: PayloadAction<number>
): Generator<any, void, any> {
  try {
    yield put(setUserPostsIsLoading(true));
    const data = yield call(getUserPosts, action.payload);
    yield put(setUserPosts(data));
    const dataArray = Array.from(
      { length: data.length },
      (_, index) => data[index].id
    );
    yield put(setInitialComments(dataArray));
    yield put(setDisplayedPosts(data));
    yield delay(500);
    yield put(setUserPostsIsLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setUserPostsError(`${error}`));
  }
}

export function* handleUserInfo(
  action: PayloadAction<number>
): Generator<any, void, any> {
  try {
    const data = yield call(getUserInfo, action.payload);
    yield put(setUserInfoIsLoading(true));
    yield put(setUser(data));

    yield delay(500);
    yield put(setUserInfoIsLoading(false));
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
