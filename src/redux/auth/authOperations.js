// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';

// import { signUp, login, setAuthHeader, clearAuthHeader } from 'services/auth';

// // SignUp
// export const signUpThunk = createAsyncThunk(
//   'auth/signUp',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await signUp(credentials);
//       console.log('response signUp: ', response);
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (error) {
//       toast.error('Something went wrong. Please try again later');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Login
// export const logInThunk = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await login(credentials);
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Logout
// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// // Refresh
// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const { token } = thunkAPI.getState().auth;
//     if (!token) return thunkAPI.rejectWithValue('No valid token');
//     setAuthHeader(token);
//     try {
//       const response = await axios.get('/users/current');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// add token
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// remove token
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// signUp
export const signUp = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      console.log('response signUp: ', response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// logIn
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      console.log('response logIn: ', response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// logOut
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// refresh
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) return thunkAPI.rejectWithValue('No valid token!!!');
    setAuthHeader(token);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
