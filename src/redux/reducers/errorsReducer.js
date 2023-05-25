import { SET_POSTS_ERROR } from "../actions";

const initialState = {
  postsError: "",
};

const errors = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS_ERROR:
      return {
        ...state,
        postsError: payload,
      };

    default:
      return state;
  }
};

export default errors;
