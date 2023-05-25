import {
  takeEvery,
  put,
  call,
  fork,
  all,
  delay,
} from "@redux-saga/core/effects";
import { SET_POSTS_ERROR, GET_POSTS, GET_COMMENTS } from "../actions";
import { getPosts, getComments } from "../../api";
import {
  setPosts,
  setComments,
  setPostsIsLoading,
  setCommentsIsLoading,
} from "../actions/actionCreater";

export function* handlePosts() {
  try {
    yield put(setPostsIsLoading(true));
    const data = yield call(getPosts);
    yield put(setPosts(data));
    yield delay(500);
    yield put(setPostsIsLoading(false));
  } catch {
    yield put({
      type: SET_POSTS_ERROR,
      payload: "Error fetching posts.",
    });
  }
}

export function* handleComments(action) {
  try {
    yield put(setCommentsIsLoading(true));
    const data = yield call(getComments, action.payload);
    yield put(setComments(data));
    yield delay(500);
    yield put(setCommentsIsLoading(false));
  } catch (error) {
    console.log(error);
    // yield put({
    //   type: SET_POSTS_ERROR,
    //   payload: "Error fetching Comments.",
    // });
  }
}

export function* watchCommentsSaga() {
  yield takeEvery(GET_COMMENTS, handleComments);
}

export function* watchPostsSaga() {
  yield takeEvery(GET_POSTS, handlePosts);
}

export default function* rootSaga() {
  yield all([fork(watchPostsSaga), fork(watchCommentsSaga)]);
}
