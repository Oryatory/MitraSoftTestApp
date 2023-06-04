import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostProps } from "../../components/post/Post";

interface displayedPostsStateType {
  displayedPosts: PostProps[];
  isSorted: boolean;
  isSortAscending: boolean;
}

const initialState: displayedPostsStateType = {
  displayedPosts: [],
  isSorted: false,
  isSortAscending: false,
};

const displayedPostsSlice = createSlice({
  name: "displayedPosts",
  initialState,
  reducers: {
    setIsSorted: (state, action) => {
      state.isSorted = action.payload;
    },
    setIsSortAscending: (state) => {
      state.isSortAscending = !state.isSortAscending;
    },
    setDisplayedPosts: (state, action: PayloadAction<PostProps[]>) => {
      state.displayedPosts = action.payload;
    },
  },
});

export const { setDisplayedPosts, setIsSorted, setIsSortAscending } =
  displayedPostsSlice.actions;
export default displayedPostsSlice.reducer;
