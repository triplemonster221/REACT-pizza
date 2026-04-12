import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sortArray2 = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setFilters: (state, action) => {
      state.category = Number(action.payload.category);
      state.sortArray2 = action.payload.sort;
      state.page = action.payload.page;
      console.log("payload", action.payload);
    },
  },
});

export const { setCategory, setSort, setOrder, setSearch, setPage, setFilters } = sortSlice.actions;

export default sortSlice.reducer;
