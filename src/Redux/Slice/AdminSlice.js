import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Service/Config";
import { toast } from "react-toastify";

export const adminSignIn = createAsyncThunk(
  "post/userSignIn",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post("login", data);
      if (response?.data) {
        localStorage.setItem("Token", JSON.stringify(response.data.token));
        toast.success(response.data.success);
        return response.data.token;
      }
    } catch (err) {
      toast.error(err.response.data.error);
      return rejectWithValue(err.response.data.error);
    }
  }
);
export const getProduct = createAsyncThunk(
  "get/getProduct",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.get("get");
      if (response.data.post) {
        return response.data.post;
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const AdminSlice = createSlice({
  name: "counter",
  initialState: {
    loading: false,
    error: "",
    token: "",
    productData: [],
  },

  extraReducers: {
    [adminSignIn.pending]: (state, action) => {
      state.loading = true;
    },
    [adminSignIn.fulfilled]: (state, action) => {
      state.token = action.payload;
      state.loading = false;
    },
    [adminSignIn.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.productData = action.payload;
      state.loading = false;
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export default AdminSlice.reducer;
