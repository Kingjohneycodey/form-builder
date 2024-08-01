import { createSlice } from "@reduxjs/toolkit";

const dropElementsSlice = createSlice({
  name: "elements",
  initialState: [],
  reducers: {
    addElement: (state, action) => {
      state.push(action.payload);
    },
    removeElement: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    reorderElements: (state, action) => {
      return action.payload;
    },
  },
});

export const { addElement, removeElement, reorderElements } =
  dropElementsSlice.actions;
export default dropElementsSlice.reducer;
