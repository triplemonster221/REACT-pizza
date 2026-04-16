import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TPizza } from "../../types/TCartItem";

enum Status {
  LOADING = "loading",
  SUCCSESS = "succsess",
  ERROR = "error",
}

export interface InitialState {
  pizzasArray: TPizza[];
  status: Status;
}

type TfetchPizzasArray = Record<string, string>;

const initialState: InitialState = {
  pizzasArray: [],
  status: Status.LOADING,
};

// First, create the thunk
export const fetchPizzasArray = createAsyncThunk("pizzas/fetchByIdStatus", async (params: TfetchPizzasArray) => {
  const { categoryParam, sortBy, orderParams, searchParam, page } = params;
  const res = await axios.get<TPizza[]>(
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
      state.status = Status.LOADING;
      state.pizzasArray = [];
    });
    builder.addCase(fetchPizzasArray.fulfilled, (state, action) => {
      state.pizzasArray = action.payload;
      state.status = Status.SUCCSESS;
    });
    builder.addCase(fetchPizzasArray.rejected, (state) => {
      state.status = Status.ERROR;
      state.pizzasArray = [];
    });
  },
});
export const { setPizzas } = pizaSlise.actions;

export default pizaSlise.reducer;
