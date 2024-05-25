import { configureStore } from '@reduxjs/toolkit';

import shopCartReducer from '../features/shopCartSlice';

import { productApi } from '../../pages/api/productsApi';

export const store = configureStore({
  reducer: {
    shopCart: shopCartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});
