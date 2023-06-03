import { combineReducers } from "redux";
import postsSlice from "./postsSlice";
import commentsSlice from "./commentsSlice";
import userSlice from "./userSlice";
import searchSlice from "./searchSlice";
import displayedPostsSlice from "./displayedPostsSlice";
import paginationSlice from "./paginationSlice";

const rootReducer = combineReducers({
  postsSlice,
  commentsSlice,
  userSlice,
  searchSlice,
  displayedPostsSlice,
  paginationSlice,
});

export default rootReducer;
