import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slice/ProductSlice";
import CartSlice from "./Slice/CartSlice";
import BlogSlice from "./Slice/BlogSlice";

const store = configureStore({
  reducer: {
    blogs: BlogSlice,
    products: ProductSlice,
    cart: CartSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>; // Thêm dòng này để xác định loại RootState
export type AppDispatch = typeof store.dispatch; // Thêm dòng này để xác định loại AppDispatch
