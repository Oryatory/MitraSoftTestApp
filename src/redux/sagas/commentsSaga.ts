import { takeEvery, put, call, delay } from "redux-saga/effects";
import { setCommentsIsLoading, setComments } from "../reducers/commentsSlice";
import { getComments } from "../../api";
import { PayloadAction } from "@reduxjs/toolkit";

export function* handleComments(
  action: PayloadAction<number>
): Generator<any, void, any> {
  try {
    const postId = action.payload;
    yield put(setCommentsIsLoading(postId));
    const data = yield call(getComments, postId);
    yield put(setComments({ data, postId }));
    yield delay(500);
    yield put(setCommentsIsLoading(postId));
  } catch (error) {
    console.log(error);
  }
}

export function* watchCommentsSaga() {
  yield takeEvery("comments/fetchComments", handleComments);
}
