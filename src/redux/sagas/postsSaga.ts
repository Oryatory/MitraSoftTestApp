import { takeEvery, put, delay, call } from "@redux-saga/core/effects";
import {
  setPosts,
  setPostsError,
  setPostsIsLoading,
} from "../reducers/postsSlice";
import { setInitialComments } from "../reducers/commentsSlice";
import { getPosts } from "../../api";
import { setDisplayedPosts } from "../../redux/reducers/displayedPostsSlice";

export function* handlePosts(): Generator<any, void, any> {
  try {
    yield put(setPostsIsLoading(true));
    const data = yield call(getPosts);
    yield put(setPosts(data));
    const dataArray = Array.from(
      { length: data.length },
      (_, index) => data[index].id
    );
    yield put(setInitialComments(dataArray));
    yield put(setDisplayedPosts(data));
    yield delay(500);
    yield put(setPostsIsLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setPostsError("Something went wrong..."));
  }
}

export function* watchPostsSaga() {
  yield takeEvery("posts/fetchPosts", handlePosts);
}
