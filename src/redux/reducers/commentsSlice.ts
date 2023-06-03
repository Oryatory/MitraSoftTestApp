import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommentData {
  id: number;
  email: string;
  body: string;
}

interface Comment {
  comments?: CommentData[];
  commentsIsLoading?: boolean;
}

interface CommentsState {
  allComments: Comment[];
}

const initialState: CommentsState = { allComments: [] };

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (
      state,
      action: PayloadAction<{ data: any[]; postId: number }>
    ) => {
      state.allComments[action.payload.postId].comments = action.payload.data;
    },
    deleteComments: (state, action: PayloadAction<number>) => {
      state.allComments[action.payload].comments = undefined;
    },
    setInitialComments: (state, action: PayloadAction<any[]>) => {
      state.allComments = action.payload.reduce((acc, comment) => {
        return {
          ...acc,
          [comment]: { commentsIsLoading: false },
        };
      }, {});
    },
    setCommentsIsLoading: (state, action: PayloadAction<number>) => {
      const isLoading = state.allComments[action.payload].commentsIsLoading;
      state.allComments[action.payload].commentsIsLoading = !isLoading;
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
