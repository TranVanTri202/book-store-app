import { createAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "./ProductSlice";

export const addToCart = createAction<ProductType>("cart/addToCart");
export const removeFromCart = createAction<string>("cart/removeFromCart");
const cartSlice = createSlice({
  name: "cart",
  initialState: { dataProduct: [] as ProductType[] },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addToCart, (state, action) => {
        state.dataProduct.push(action.payload);
      })
      .addCase(removeFromCart, (state, action) => {
        state.dataProduct = state.dataProduct.filter(
          (product) => product._id !== action.payload
        );
      });
  },
});

export default cartSlice.reducer;
