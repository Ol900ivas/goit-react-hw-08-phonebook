// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// const AUTH_TOKEN = '';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const signUp = async userData => {
  try {
    const { data } = await instance.post('/users/signup', userData);
    console.log('data:', data);
    return data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const login = async userData => {
  try {
    const { data } = await instance.post('/users/login', userData);
    console.log('data:', data);
    return data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};
