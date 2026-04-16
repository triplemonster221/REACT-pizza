import { configureStore } from "@reduxjs/toolkit";
import sortSlice from "./slices/sortSlice";
import cartSlise from "./slices/cartSlice";
import pizzas from "./slices/pizzaSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter: sortSlice,
    cart: cartSlise,
    pizzas,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types
