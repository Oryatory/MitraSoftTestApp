import { takeEvery, put, delay, call, fork } from "@redux-saga/core/effects";
import {
  setUser,
  setUserInfoError,
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
    const commentsArray = Array.from(
      { length: data.length },
      (_, index) => data[index].id
    );
    yield put(setInitialComments(commentsArray));
    yield put(setDisplayedPosts(data));
    yield delay(500);
    yield put(setUserPostsIsLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setDisplayedPosts([]));
    yield put(setUserPostsIsLoading(false));
    yield put(setUserPostsError("Something went wrong..."));
  }
}

export function* handleUserInfo(
  action: PayloadAction<number>
): Generator<any, void, any> {
  try {
    yield put(setUserInfoIsLoading(true));
    const data = yield call(getUserInfo, action.payload);
    yield put(setUser(data));
    yield delay(500);
    yield put(setUserInfoIsLoading(false));
  } catch (error) {
    yield put(setUserInfoIsLoading(false));
    yield put(setUserInfoError("Error fetching user info..."));
  }
}

export function* handleUserSaga(action: PayloadAction<number>) {
  yield fork(handleUserInfo, action);
  yield fork(handleUserPosts, action);
}

export function* watchUserSaga() {
  yield takeEvery("user/fetchUser", handleUserSaga);
}
