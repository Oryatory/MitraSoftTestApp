import { SET_POSTS } from "../actions";

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS:
      return {
        ...state,
        posts: payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
