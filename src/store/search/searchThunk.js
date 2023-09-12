import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

const baseUrl = BASE_URL;

const getSearch = createAsyncThunk(
  "search/getSearch",
  async (searchString, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}search`,
        { query: searchString },
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

const getRecentSearches = createAsyncThunk(
  "search/getRecentSearches",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(`${baseUrl}search`);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue({ ...error.response.data.error });
    }
  }
);

export { getSearch, getRecentSearches };
