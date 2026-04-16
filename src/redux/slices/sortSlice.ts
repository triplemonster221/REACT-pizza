import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TinitialState, TsortArray2 } from "../../types/Tfilter";

const initialState: TinitialState = {
  category: 0,
  sortArray2: {
    name: "популярности",
    sort: "rating",
  },
  order: true,
  search: "",
  page: 1,
};

export const sortSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<TsortArray2>) => {
      state.sortArray2 = action.payload;
    },
    setOrder: (state, action: PayloadAction<boolean>) => {
      state.order = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setFilters: (state, action) => {
      state.category = Number(action.payload.category);
      state.sortArray2 = action.payload.sort;
      state.page = Number(action.payload.page);
    },
  },
});

export const { setCategory, setSort, setOrder, setSearch, setPage, setFilters } = sortSlice.actions;

export default sortSlice.reducer;
