import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./home/homeSlice";

export default configureStore({
  reducer: {
    home: homeSlice,
  },
});
