import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { rootReducer } from './reducer';

// import { contactsReduser } from './contacts';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

export const store = configureStore({
  reducer: rootReducer,
  // reducer: {
  //   auth: persistedReducer,
  //   contacts: rootReducer,
  // },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
