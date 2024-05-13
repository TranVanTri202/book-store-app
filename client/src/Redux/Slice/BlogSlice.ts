import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConfig } from "../../user/config/apiConfig";
import axios from "axios";

export interface BlogType {
  _id?: any;
  title: string;
  description: string;
  image: string;
  createdAt?: Date | undefined;
}

export const fetchDataBlog = createAsyncThunk<BlogType[]>(
  "products/fetchDataBlog",
  async () => {
    try {
      const response = await fetch(apiConfig.blog.getApi);
      if (!response.ok) {
        throw new Error("Failed to fetch blog");
      }
      const data = await response.json();
      return data as BlogType[];
    } catch (error) {
      console.log("khong lay duoc du lieu tu api");

      throw error;
    }
  }
);
export const addDataBlog = createAsyncThunk(
  "Blog/addBlog",
  async (blog: BlogType) => {
    try {
      const response = await axios.post(apiConfig.blog.getApi, blog);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteDataBlog = createAsyncThunk(
  "Blog/deleteBlog",
  async (blogId: string) => {
    try {
      const response = await axios.delete(`${apiConfig.blog.getApi}${blogId}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateDataBlog = createAsyncThunk(
  "Blog/updateBlog",
  async (blog: BlogType) => {
    try {
      const response = await axios.put(
        `${apiConfig.blog.getApi}${blog._id}`,
        blog
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
const BlogSlice = createSlice({
  name: "Blog",
  initialState: { dataBlog: [] as BlogType[] },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDataBlog.fulfilled, (state, action) => {
        state.dataBlog = action.payload;
      })
      .addCase(addDataBlog.fulfilled, (state, action) => {
        state.dataBlog = [...state.dataBlog, action.payload];
      })
      .addCase(deleteDataBlog.fulfilled, (state, action) => {
        state.dataBlog = state.dataBlog.filter(
          (blog) => blog._id !== action.payload._id
        );
      })
      .addCase(updateDataBlog.fulfilled, (state, action) => {
        state.dataBlog = state.dataBlog.map((blog) =>
          blog._id === action.payload._id ? action.payload : blog
        );
      });
  },
});

export default BlogSlice.reducer;
