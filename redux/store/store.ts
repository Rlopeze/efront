import { configureStore } from '@reduxjs/toolkit';

import shopCartReducer from '../features/shopCartSlice';
import userReducer from '../features/userSlice';

import { productApi } from '../../pages/api/productsApi';
import { authApi } from '../../pages/api/authApi';

export const store = configureStore({
  reducer: {
    auth: userReducer,
    shopCart: shopCartReducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware, authApi.middleware]),
});
