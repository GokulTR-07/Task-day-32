// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';
import jsonData from './data.json';

const initialState = jsonData.products.map((product) => ({ ...product, quantity: 0 }));

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementQuantity(state, action) {
      const productId = action.payload;
      const product = state.find((item) => item.id === productId);
      if (product) {
        product.quantity++;
      }
    },
    decrementQuantity(state, action) {
      const productId = action.payload;
      const product = state.find((item) => item.id === productId);
      if (product && product.quantity > 0) {
        product.quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
