// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const AUTH_TOKEN = '';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const signUp = async UserData => {
  try {
    const { data } = instance.post('/users/signup', UserData);
    console.log('data:', data);
  } catch (error) {
    console.error(error);
  }
};
