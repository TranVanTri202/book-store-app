import { createAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "./ProductSlice";

export const addToCart = createAction<ProductType>("cart/addToCart");

const cartSlice = createSlice({
  name: "cart",
  initialState: { dataProduct: [] as ProductType[] },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addToCart, (state, action) => {
      state.dataProduct.push(action.payload);
    });
  },
});

export default cartSlice.reducer;
