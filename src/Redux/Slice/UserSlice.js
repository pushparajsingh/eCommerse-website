import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Service/Config";
import { toast } from "react-toastify";

export const getEcommerseProduct = createAsyncThunk(
  "get/getEcommerseProduct",
  async () => {
    const getData = await instance.get("dashGetProduct");
    try {
      if (getData.data.products) {
        return getData.data.products;
      }
    } catch (error) {
      console.log(7799, error);
    }
  }
);

export const getProduct = createAsyncThunk(
  "get/getProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("get");
      if (response?.data) {
        return response.data.post;
      }
    } catch (error) {
      console.log("data not get", error.response.data.error);
      // return rejectWithValue(error.response.data.error);
    }
  }
);

export const SignIn = createAsyncThunk(
  "post/SignIn",
  async (data, { rejectWithValue }) => {
    console.log("SignIn", data);
    const response = await instance.post("login", data);
    try {
      console.log(555, response);
      if (response.data) {
        sessionStorage.setItem("Token", JSON.stringify(response.data.token));
        toast.success(response.data.success);
        return response.data.token;
      }
    } catch (err) {
      toast.error(err.response.data.error);
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const signUp = createAsyncThunk(
  "post/signUp",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post("register", data);
      if (response) toast.success(response.data.message);
      // return response.data.message;
    } catch (err) {
      // if (!err.response) {
      //   throw err;
      // }
      toast.error(err.response.data.error);
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const UserSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    allUserProduct: [],
    error: null,
    del: "",
    allAdminProduct: "",
    token: "",
    createPost: "",
    loading: false,
  },

  extraReducers: {
    [getEcommerseProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getEcommerseProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.allUserProduct = action.payload;
    },
    [getEcommerseProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.allAdminProduct = action.payload;
      state.loading = false;
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [SignIn.pending]: (state, action) => {
      state.loading = true;
    },
    [SignIn.fulfilled]: (state, action) => {
      state.token = action.payload;
      state.loading = false;
    },
    [SignIn.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [signUp.pending]: (state, action) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.createPost = action.payload;
      state.loading = false;
    },
    [signUp.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export default UserSlice.reducer;
