import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Service/Config";
import { toast } from "react-toastify";

export const adminSignIn = createAsyncThunk(
  "post/userSignIn",
  async (data, { rejectWithValue }) => {
    console.log("adminSignIn");
    try {
      const response = await instance.post("adminToken", data);
      sessionStorage.setItem("Token", JSON.stringify(response.data.token));
      toast.success(response.data.success);
      return response.data.token;
    } catch (err) {
      toast.error(err.response.data.error);
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const AdminSlice = createSlice({
  name: "counter",
  initialState: {
    loading: false,
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
  },
});

// Action creators are generated for each case reducer function

export default AdminSlice.reducer;
