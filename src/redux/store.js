import { configureStore } from '@reduxjs/toolkit';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { rootReducer } from './reducer';
// import { contactsReduser } from './contacts';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   blacklist: ['token'],
// };

// const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  // reducer: rootReducer,
  reducer: {
    // auth: persistedReducer,
    contacts: rootReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);
