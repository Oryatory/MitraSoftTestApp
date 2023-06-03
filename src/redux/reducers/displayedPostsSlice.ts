import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostProps } from "../../components/post/Post";

interface displayedPostsStateType {
  displayedPosts: PostProps[];
}

const initialState: displayedPostsStateType = {
  displayedPosts: [],
};

const displayedPostsSlice = createSlice({
  name: "displayedPosts",
  initialState,
  reducers: {
    setDisplayedPosts: (state, action: PayloadAction<PostProps[]>) => {
      state.displayedPosts = action.payload;
    },
  },
});

export const { setDisplayedPosts } = displayedPostsSlice.actions;
export default displayedPostsSlice.reducer;
