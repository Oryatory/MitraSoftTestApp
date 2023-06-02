import { takeEvery, put, delay, call } from "@redux-saga/core/effects";
import { setPosts, setPostsIsLoading } from "../reducers/postsSlice";
import { setInitialComments } from "../reducers/commentsSlice";
import { getPosts } from "../../api";

export function* handlePosts(): Generator<any, void, any> {
  try {
    yield put(setPostsIsLoading(true));
    const data = yield call(getPosts);
    yield put(setPosts(data));
    yield put(setInitialComments(data.length));
    yield delay(500);

    yield put(setPostsIsLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* watchPostsSaga() {
  yield takeEvery("posts/fetchPosts", handlePosts);
}
