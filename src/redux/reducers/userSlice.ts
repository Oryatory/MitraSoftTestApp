import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userPosts: [],
  userPostsIsLoading: false,
  userPostsError: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserPosts: (state, action) => {
      state.userPosts = action.payload;
    },
    setUserPostsIsLoading: (state, action) => {
      state.userPostsIsLoading = action.payload;
    },
    setUserPostsError: (state, action) => {
      state.userPostsError = action.payload;
    },
  },
});

export const {
  setUser,
  setUserPosts,
  setUserPostsIsLoading,
  setUserPostsError,
} = userSlice.actions;
export default userSlice.reducer;
