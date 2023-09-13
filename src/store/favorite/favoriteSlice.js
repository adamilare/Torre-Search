import { createSlice } from "@reduxjs/toolkit";
import { setFavorite, getFavorites } from "./favoriteThunk";

const initialState = {
  favorites: null,
  loading: false,
  error: null,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(setFavorite.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(setFavorite.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        error: null,
        favorites: payload,
      }))
      .addCase(setFavorite.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(getFavorites.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getFavorites.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        error: null,
        favorites: payload,
      }))
      .addCase(getFavorites.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  },
});

export default favoriteSlice.reducer;
