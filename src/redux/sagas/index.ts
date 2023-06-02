import { all, fork } from "redux-saga/effects";
import { watchPostsSaga } from "./postsSaga";
import { watchCommentsSaga } from "./commentsSaga";
import { watchUserSaga } from "./userSaga";

export default function* rootSaga() {
  yield all([
    fork(watchPostsSaga),
    fork(watchCommentsSaga),
    fork(watchUserSaga),
  ]);
}
