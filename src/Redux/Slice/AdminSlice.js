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
  async (_, { rejectWithValue }) => {
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

export const deleteProduct = createAsyncThunk(
  "delete/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`delete/${id}`);
      if (response.data.message) {
        return response.data.message;
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "update/updateProduct",
  async ({ id, data }, rejectWithValue) => {
    try {
      let formData = new FormData();
      formData.append("title", data.title);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("image", data.image);
      const response = await instance.put(`update/${id}`, formData);
      if (response.data.success) {
        return response.data.success;
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addAdminProduct = createAsyncThunk(
  "post/addProduct",
  async (data, rejectWithValue) => {
    console.log(777, data);
    try {
      let formData = new FormData();
      formData.append("title", data.title);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("image", data.image);
      const response = await instance.post("post", formData);
      console.log(777, response.data.message);
      if (response.data.message) {
        toast(response.data.message);
        return response.data.message;
      }
    } catch (err) {
      toast(err.response.data.error);
      // console.log(err.response.data.error);
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
    message: "",
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
      state.error = action.payload;
      state.loading = false;
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
    [deleteProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.message += action.payload;
    },
    [deleteProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.message += action.payload;
    },
    [updateProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addAdminProduct.pending]: (state, action) => {
      state.loading = true;
      state.message = " ";
    },
    [addAdminProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.message += action.payload;
    },
    [addAdminProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export default AdminSlice.reducer;
