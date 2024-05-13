import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiConfig } from "../../user/config/apiConfig";

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
      const response = await axios.get(apiConfig.User.getApi);
      return response.data;
    } catch (error) {}
  }
);

export const updateDataUser = createAsyncThunk(
  "User/updateDataUser",
  async (user: UserType) => {
    try {
      const response = await axios.put(
        `${apiConfig.User.updateAPI}${user._id}`,
        user
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const UserSlice = createSlice({
  name: "Blog",
  initialState: { dataUser: [] as UserType[] },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetDataUser.fulfilled, (state, action) => {
        state.dataUser = action.payload;
      })
      .addCase(updateDataUser.fulfilled, (state, action) => {
        state.dataUser = state.dataUser.map((user) =>
          user._id === action.payload._id ? action.payload : user
        );
      });
  },
});

export default UserSlice.reducer;
