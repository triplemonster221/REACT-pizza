import { configureStore } from "@reduxjs/toolkit";
import sortSlice from "./slices/sortSlice";
import cartSlise from "./slices/cartSlice";
import pizzas from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: {
    filter: sortSlice,
    cart: cartSlise,
    pizzas,
  },
});
