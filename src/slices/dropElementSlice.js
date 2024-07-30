import { createSlice } from '@reduxjs/toolkit';

const dropElementsSlice = createSlice({
  name: 'elements',
  initialState: [],
  reducers: {
    addElement: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addElement } = dropElementsSlice.actions;
export default dropElementsSlice.reducer;
