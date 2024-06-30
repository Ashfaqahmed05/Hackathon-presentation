import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveForm: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { saveForm } = formSlice.actions;
export default formSlice.reducer;
