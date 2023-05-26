import {
  SET_POSTS,
  SET_COMMENTS,
  SET_POSTS_IS_LOADING,
  SET_COMMENTS_IS_LOADING,
  SET_INITIAL_COMMENTS,
} from "../actions";

export const setPosts = (payload) => ({ type: SET_POSTS, payload });

export const setInitialComments = (payload) => ({
  type: SET_INITIAL_COMMENTS,
  payload,
});

export const setComments = (payload) => ({ type: SET_COMMENTS, payload });

export const setPostsIsLoading = (payload) => ({
  type: SET_POSTS_IS_LOADING,
  payload,
});

export const setCommentsIsLoading = (payload) => ({
  type: SET_COMMENTS_IS_LOADING,
  payload,
});
