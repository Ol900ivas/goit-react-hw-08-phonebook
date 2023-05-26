import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter.js/filterSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedReducer,
});
