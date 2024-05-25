import { createSlice } from '@reduxjs/toolkit';

import getLocalStorage from '../../utils/getLocalStorage';

const initialState = {
  cartItems: getLocalStorage('cartItems', []),
};

export const shopCartSlice = createSlice({
  initialState,
  name: 'shopCartSlice',
  reducers: {
    setCartItem: (state, action) => {
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        state.cartItems = state.cartItems.map((i) =>
          i.product === isItemExist.product ? item : i
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      if (typeof window !== undefined)
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeCartItem: (state, action) => {
      state.cartItems = state?.cartItems.filter(
        (i) => i.product !== action.payload
      );
      if (typeof window !== undefined)
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export default shopCartSlice.reducer;

export const { setCartItem, removeCartItem } = shopCartSlice.actions;
