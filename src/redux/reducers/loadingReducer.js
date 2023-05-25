import { SET_POSTS_IS_LOADING, SET_COMMENTS_IS_LOADING } from "../actions";

const initialState = {
  postsIsLoading: false,
  commentsIsLoading: false,
};

const loadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS_IS_LOADING:
      return {
        ...state,
        postsIsLoading: payload,
      };

    default:
      return state;
  }
};
export default loadingReducer;
