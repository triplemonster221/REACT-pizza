import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlise = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state = action.payload;
    },
  },
});
export const { addToCart } = cartSlise.actions;

export default cartSlise.reducer;
