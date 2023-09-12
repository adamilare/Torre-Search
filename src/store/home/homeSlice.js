import { createSlice } from "@reduxjs/toolkit";
import { getContents } from "./homeThunk";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContents.pending, (state) => ({ ...state, loading: true }))
      .addCase(getContents.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        error: null,
        data: payload,
      }))
      .addCase(getContents.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  },
});

export default homeSlice.reducer;
