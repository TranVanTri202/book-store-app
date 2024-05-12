import { createAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "./ProductSlice";

export const addToCart = createAction<ProductType>("cart/addToCart");
export const removeFromCart = createAction<string>("cart/removeFromCart");
export const decreaseQuantity = createAction<string>("cart/decreaseQuantity");

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
      })
      .addCase(decreaseQuantity, (state, action) => {
        // Tìm sản phẩm có _id tương ứng và giảm số lượng đi 1
        const index = state.dataProduct.findIndex(
          (product) => product._id === action.payload
        );
        if (index !== -1) {
          const product = state.dataProduct[index];
          if (product && product.quantity !== undefined) {
            product.quantity -= 1;
            // Kiểm tra nếu số lượng nhỏ hơn hoặc bằng 0 thì xóa sản phẩm khỏi giỏ hàng
            if (product.quantity <= 0) {
              state.dataProduct.splice(index, 1);
            }
          }
        }
      });
  },
});

export default cartSlice.reducer;
