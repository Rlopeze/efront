import { configureStore } from '@reduxjs/toolkit';

import shopCartReducer from '../features/shopCartSlice';
import userReducer from '../features/userSlice';

import { ordersApi } from '../../pages/api/ordersApi';
import { productApi } from '../../pages/api/productsApi';
import { authApi } from '../../pages/api/authApi';

export const store = configureStore({
  reducer: {
    auth: userReducer,
    shopCart: shopCartReducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      ordersApi.middleware,
      productApi.middleware,
      authApi.middleware,
    ]),
});
