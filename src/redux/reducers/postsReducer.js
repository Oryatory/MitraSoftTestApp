import { SET_COMMENTS, SET_POSTS } from "../actions";

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
    case SET_COMMENTS:
      const updatedPosts = [...state.posts];
      if (typeof payload === "number") {
        delete updatedPosts[payload - 1].comments;
        return { ...state, posts: updatedPosts };
      }

      const { postId } = payload[0];
      const post = state.posts.find((post) => post.id === postId);

      if (!post.comments) {
        updatedPosts[post.id - 1] = {
          ...updatedPosts[post.id - 1],
          comments: payload,
        };
      }
      return {
        ...state,
        posts: updatedPosts,
      };
    default:
      return state;
  }
};

export default postsReducer;
