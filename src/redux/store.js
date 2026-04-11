import { configureStore } from "@reduxjs/toolkit";
import sortSlice from "./slices/sortSlice";
import cartSlise from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    filter: sortSlice,
    cart: cartSlise,
  },
});
