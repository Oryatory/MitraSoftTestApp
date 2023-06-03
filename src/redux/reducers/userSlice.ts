import { createSlice } from "@reduxjs/toolkit";
import { PostProps } from "../../components/post/Post";

export interface userType {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

interface UserProps {
  user: userType | null;
  userPosts: PostProps[];
  userPostsIsLoading: boolean;
  userPostsError: string;
}

const initialState: UserProps = {
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
