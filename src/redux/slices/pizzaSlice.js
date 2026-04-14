import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pizzasArray: [],
  status: "loading",
};

// First, create the thunk
export const fetchPizzasArray = createAsyncThunk("pizzas/fetchByIdStatus", async (params) => {
  const { categoryParam, sortBy, orderParams, searchParam, page } = params;
  const res = await axios.get(
    `https://69b5a49e583f543fbd9c12e0.mockapi.io/items${sortBy}&limit=4&page=${page}${categoryParam}&order=${orderParams}${searchParam}`,
  );
  return res.data;
});

export const pizaSlise = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.pizzasArray = action.payload;
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzasArray.pending, (state) => {
      state.status = "loading";
      state.pizzasArray = [];
    });
    builder.addCase(fetchPizzasArray.fulfilled, (state, action) => {
      state.pizzasArray = action.payload;
      state.status = "succsess";
    });
    builder.addCase(fetchPizzasArray.rejected, (state) => {
      state.status = "error";
      state.pizzasArray = [];
    });
  },
});
export const { setPizzas } = pizaSlise.actions;

export default pizaSlise.reducer;
