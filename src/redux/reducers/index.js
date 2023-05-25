import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import errorsReducer from "./errorsReducer";
import loadingReducer from "./loadingReducer";

const reducer = combineReducers({
  postsReducer,
  errorsReducer,
  loadingReducer,
});

export default reducer;
