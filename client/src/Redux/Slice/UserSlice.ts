import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserType {
  _id?: any;
  username: string;
  password: string;
  role: string;
  orders: [];
}

export const fetDataUser = createAsyncThunk<UserType[]>(
  "products/fetchDataBlog",
  async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/userData");
      return response.data;
    } catch (error) {}
  }
);

const UserSlice = createSlice({
  name: "Blog",
  initialState: { dataUser: [] as UserType[] },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetDataUser.fulfilled, (state, action) => {
      state.dataUser = action.payload;
    });
  },
});

export default UserSlice.reducer;
