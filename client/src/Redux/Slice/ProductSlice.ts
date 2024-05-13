import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiConfig } from "../../user/config/apiConfig";

export interface ProductType {
  _id?: any;
  name: string;
  author: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  createdAt?: Date | undefined;
  quantity?: number;
}

export const fetchDataProducts = createAsyncThunk<ProductType[]>(
  "products/fetchDataProducts",
  async () => {
    try {
      // Gọi API để lấy dữ liệu sản phẩm
      const response = await fetch(apiConfig.product.getApi);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      return data as ProductType[];
    } catch (error) {
      console.log("khong lay duoc du lieu tu api");

      throw error;
    }
  }
);

export const addDataProduct = createAsyncThunk(
  "Product/addProduct",
  async (product: ProductType) => {
    try {
      const response = await axios.post(apiConfig.product.getApi, product);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteDataProduct = createAsyncThunk(
  "Product/deleteProduct",
  async (productId: string) => {
    try {
      const response = await axios.delete(
        `${apiConfig.product.addApi}${productId}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateDataProduct = createAsyncThunk(
  "Product/updateProduct",
  async (product: ProductType) => {
    try {
      const response = await axios.put(
        `${apiConfig.product.addApi}${product._id}`,
        product
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const ProductSlice = createSlice({
  name: "Product",
  initialState: { dataProduct: [] as ProductType[] },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDataProducts.fulfilled, (state, action) => {
        state.dataProduct = action.payload;
      })
      .addCase(addDataProduct.fulfilled, (state, action) => {
        state.dataProduct = [...state.dataProduct, action.payload];
      })
      .addCase(deleteDataProduct.fulfilled, (state, action) => {
        state.dataProduct = state.dataProduct.filter(
          (product) => product._id !== action.payload._id
        );
      })
      .addCase(updateDataProduct.fulfilled, (state, action) => {
        state.dataProduct = state.dataProduct.map((product) =>
          product._id === action.payload._id ? action.payload : product
        );
      });
  },
});

export default ProductSlice.reducer;
