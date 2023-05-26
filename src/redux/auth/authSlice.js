import { createSlice } from '@reduxjs/toolkit';
import { signUpThunk } from './authOperations';

const initialState = {
  isLoading: false,
  isAuth: '',
  error: '',
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfiled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.isAuth = payload.token;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, handlePending)
      .addCase(signUpThunk.fulfilled, handleFulfiled)
      .addCase(signUpThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
