import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
  comments?: any[];
  commentsIsLoading?: boolean;
}

interface CommentsState {
  comments: Comment[];
}

const initialState: CommentsState = { comments: [] };

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (
      state,
      action: PayloadAction<{ data: any[]; postId: number }>
    ) => {
      state.comments[action.payload.postId - 1].comments = action.payload.data;
    },
    deleteComments: (state, action: PayloadAction<number>) => {
      state.comments[action.payload].comments = undefined;
    },
    setInitialComments: (state, action: PayloadAction<number>) => {
      state.comments = Array.from({ length: action.payload }, (_) => {
        return {
          comments: undefined,
          commentsIsLoading: false,
        };
      });
    },
    setCommentsIsLoading: (state, action: PayloadAction<number>) => {
      const isLoading = state.comments[action.payload - 1].commentsIsLoading;
      state.comments[action.payload - 1].commentsIsLoading = !isLoading;
    },
  },
});

export const {
  setComments,
  setInitialComments,
  setCommentsIsLoading,
  deleteComments,
} = commentsSlice.actions;
export default commentsSlice.reducer;
