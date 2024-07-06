<<<<<<< HEAD
// src/redux/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
=======
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
>>>>>>> 8f30ee90b351a4d5d388d83cef02cc77953d738d
