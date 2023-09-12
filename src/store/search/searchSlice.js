import { createSlice } from "@reduxjs/toolkit";
import { getSearch, getRecentSearches } from "./searchThunk";

const initialState = {
  searchResult: null,
  recentSearches: null,
  resultLoading: false,
  recentSearchesLoading: false,
  resultError: null,
  recentSearchesError: null,
};

const homeSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSearch.pending, (state) => ({
        ...state,
        resultLoading: true,
      }))
      .addCase(getSearch.fulfilled, (state, { payload }) => ({
        ...state,
        resultLoading: false,
        resultError: null,
        searchResult: payload,
      }))
      .addCase(getSearch.rejected, (state, { payload }) => ({
        ...state,
        resultLoading: false,
        resultError: payload,
      }))
      .addCase(getRecentSearches.pending, (state) => ({
        ...state,
        recentSearchesLoading: true,
      }))
      .addCase(getRecentSearches.fulfilled, (state, { payload }) => ({
        ...state,
        recentSearchesLoading: false,
        recentSearchesError: null,
        recentSearches: payload,
      }))
      .addCase(getRecentSearches.rejected, (state, { payload }) => ({
        ...state,
        recentSearchesLoading: false,
        recentSearchesError: payload,
      }));
  },
});

export default homeSlice.reducer;
