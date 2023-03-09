import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Service/Config";
import { toast } from "react-toastify";

export const getEcommerseProduct = createAsyncThunk(
  "get/getEcommerseProduct",
  async () => {
    try {
      const getData = await instance.get("dashGetProduct");
      if (getData.data.products) {
        return getData.data.products;
      }
    } catch (err) {
      console.log(7799, err);
    }
  }
);

export const signInUser = createAsyncThunk(
  "post/signIn",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post("login", data);
      console.log("UserSlice");
      if (response.data) {
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

export const signUp = createAsyncThunk(
  "post/signUp",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post("register", data);
      if (response) toast.success(response.data.message);
    } catch (err) {
      toast.error(err.response.data.error);
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const addItem = createAsyncThunk(
  "post/addItem",
  async (item, { rejectWithValue }) => {
    try {
      const response = await instance.post("cart", item);
      if (response) {
        let count = 0;
        response.data.items.map((i) => (count += i.quantity));
        console.log("Total Quantity", count);
        toast.success("Product Added Successfully");
        return count;
      }
    } catch (err) {
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
    quantity: 0,
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
    [signInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (state, action) => {
      state.token = action.payload;
      state.loading = false;
    },
    [signInUser.rejected]: (state, action) => {
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
    [addItem.pending]: (state, action) => {},
    [addItem.fulfilled]: (state, action) => {
      state.quantity = action.payload;
    },
    [addItem.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export default UserSlice.reducer;
