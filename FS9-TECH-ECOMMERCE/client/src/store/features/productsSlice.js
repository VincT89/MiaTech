import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    all: [],
    current: null
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.all = payload;
    },
    setProduct: (state, { payload }) => {
      state.current = payload;
    },
  }
});

export const { setProducts, setProduct } = productsSlice.actions;

export default productsSlice.reducer;