import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import errorsReducer from "./errorsReducer";
import loadingReducer from "./loadingReducer";
import commentsReducer from "./commentsReducer";

const reducer = combineReducers({
  postsReducer,
  errorsReducer,
  loadingReducer,
  commentsReducer,
});

export default reducer;
