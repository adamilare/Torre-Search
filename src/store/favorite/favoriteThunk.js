import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

const baseUrl = BASE_URL;

const setFavorite = createAsyncThunk(
  "favorite/addToFavorite",
  async (ardaId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}favorite`,
        { ardaId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue({ ...error.response.data.error });
    }
  }
);

const getFavorites = createAsyncThunk(
  "search/getRecentSearches",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(`${baseUrl}favorite`);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue({ ...error.response.data.error });
    }
  }
);

export { setFavorite, getFavorites };
