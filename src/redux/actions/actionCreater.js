import {
  SET_POSTS,
  SET_COMMENTS,
  SET_POSTS_IS_LOADING,
  SET_COMMENTS_IS_LOADING,
} from "../actions";

export const setPosts = (payload) => ({ type: SET_POSTS, payload });

export const setComments = (payload) => ({ type: SET_COMMENTS, payload });

export const setPostsIsLoading = (payload) => ({
  type: SET_POSTS_IS_LOADING,
  payload,
});

export const setCommentsIsLoading = (payload) => ({
  type: SET_COMMENTS_IS_LOADING,
  payload,
});
