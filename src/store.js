import { configureStore } from "@reduxjs/toolkit";
import dropElementsReducer from "./slices/dropElementSlice";

const store = configureStore({
  reducer: {
    elements: dropElementsReducer,
  },
});

export default store;
