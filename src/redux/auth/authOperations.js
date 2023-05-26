// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import { signUp, login } from 'services/auth';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (userData, thunkAPI) => {
    try {
      return await signUp(userData);
    } catch (error) {
      toast.error('Something went wrong. Please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      return await login(userData);
    } catch (error) {
      toast.error('Something went wrong. Please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
