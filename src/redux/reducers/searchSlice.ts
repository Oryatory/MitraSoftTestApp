import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  searchedPosts: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSearchedPosts: (state, action) => {
      state.searchedPosts = action.payload;
    },
  },
});

export const { setSearchTerm, setSearchedPosts } = searchSlice.actions;
export default searchSlice.reducer;
