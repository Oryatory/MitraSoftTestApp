import {
  SET_COMMENTS,
  SET_COMMENTS_IS_LOADING,
  SET_INITIAL_COMMENTS,
} from "../actions";

const initialState = {};

const commentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COMMENTS:
      if (typeof payload === "number") {
        return {
          ...state,
          [payload]: {
            ...state[payload],
            comments: undefined,
          },
        };
      } else {
        const { postId } = payload[0];
        return {
          ...state,
          [postId - 1]: {
            ...state[postId - 1],
            comments: payload,
          },
        };
      }
    case SET_INITIAL_COMMENTS:
      const initialComments = Array.from({ length: payload }, (_, index) => {
        return {
          comments: undefined,
          commentsIsLoading: false,
          key: index,
        };
      });
      return { ...initialComments };
    case SET_COMMENTS_IS_LOADING:
      return {
        ...state,
        [payload - 1]: {
          ...state[payload - 1],
          commentsIsLoading: !state[payload - 1]?.commentsIsLoading,
        },
      };
    default:
      return state;
  }
};

export default commentsReducer;
