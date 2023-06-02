import { combineReducers } from "redux";
import postsSlice from "./postsSlice";
import commentsSlice from "./commentsSlice";
import userSlice from "./userSlice";
import searchSlice from "./searchSlice";

const rootReducer = combineReducers({
  postsSlice,
  commentsSlice,
  userSlice,
  searchSlice,
});

export default rootReducer;
