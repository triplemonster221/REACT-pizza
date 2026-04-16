import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartItem } from "../../types/TCartItem";

export interface ICartSlice {
  totalPrice: number;
  items: TCartItem[];
}

const initialState: ICartSlice = {
  totalPrice: 0,
  items: [],
};

export const cartSlise = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TCartItem>) => {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.totalPrice + action.payload.price;
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const DeletedItem = state.items.find((item) => item.id === action.payload);
      if (DeletedItem) {
        state.totalPrice = state.totalPrice - DeletedItem.price * DeletedItem.count;
      }
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearProducts: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    minusCountProduct: (state, action: PayloadAction<string>) => {
      const DeletedItem = state.items.find((item) => item.id === action.payload);
      if (DeletedItem && DeletedItem.count > 1) {
        DeletedItem.count--;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
      if (DeletedItem) {
        state.totalPrice = state.totalPrice - DeletedItem.price;
      }
    },
  },
});

export const { addProduct, removeProduct, clearProducts, minusCountProduct } = cartSlise.actions;

export default cartSlise.reducer;
