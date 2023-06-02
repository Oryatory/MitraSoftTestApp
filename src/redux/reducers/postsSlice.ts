import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostProps } from "../../components/post/Post";

interface PostsState {
  posts: PostProps[];
  postsIsLoading: boolean;
  postsError: string;
}

const initialState: PostsState = {
  posts: [],
  postsIsLoading: false,
  postsError: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostProps[]>) => {
      state.posts = action.payload;
    },
    setPostsIsLoading: (state, action: PayloadAction<boolean>) => {
      state.postsIsLoading = action.payload;
    },
    setPostsError: (state, action: PayloadAction<string>) => {
      state.postsError = action.payload;
    },
  },
});

export const { setPosts, setPostsIsLoading } = postsSlice.actions;
export default postsSlice.reducer;
