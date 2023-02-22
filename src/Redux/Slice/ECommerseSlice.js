import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../Service/Config";

// const initialState = {
//   value: 0,
//   data: [],
// };
export const getEcommerseProduct = createAsyncThunk(
  "get/getEcommerseProduct",
  async () => {
    return instance
      .get("dashGetProduct")
      .then((item) => item.data)
      .catch((error) => {
        console.log(555, error);
      });
  }
);

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  const deleteData = await instance.delete(`delete/${id}`);
  try {
    if (deleteData?.data) {
      return deleteData?.data;
    }
  } catch (error) {
    console.log(777779999999, error);
  }
});

export const editData = createAsyncThunk("get/editData", async (id) => {
  //yaha destructing kar ka bhajana ha or yaha get karna ha.
  const edit = await instance.get(`get/${id}`);
  try {
    if (edit?.data) {
      return edit?.data;
    }
  } catch (error) {
    console.log(777779999999, error);
  }
});

export const editPost = createAsyncThunk(
  "put/editPost",
  async ({ change, data }) => {
    //yaha destructing kar ka bhajana ha or yaha get karna ha.
    const id = change?.id?._id;
    const multiData = new FormData();
    multiData.append("Photo", data?.Photo);
    multiData.append("Name", data?.Name);
    multiData.append("Post", data?.Post);
    multiData.append("Description", data?.Description);
    multiData.append("Active", data?.Active === true ? 1 : 0);
    const edit = await instance.put(`update/${id}`, multiData);
    try {
      if (edit?.data) {
        console.log(edit?.data);
        return edit?.data;
      }
    } catch (error) {
      console.log(777779999999, error);
    }
  }
);

export const addPost = createAsyncThunk("post/addPost", async (data) => {
  //yaha destructing kar ka bhajana ha or yaha get karna ha.
  console.log("call submit", data);
  const multiData = new FormData();
  multiData.append("Photo", data?.Photo);
  multiData.append("Name", data?.Name);
  multiData.append("Post", data?.Post);
  multiData.append("Description", data?.Description);
  multiData.append("Active", data?.Active === true ? 1 : 0);
  const edit = await instance.post("post", multiData);
  try {
    if (edit?.data) {
      console.log(edit?.data);
      return edit?.data;
    }
  } catch (error) {
    console.log(777779999999, error);
  }
});

export const ECommerseSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    allDataProduct: [],
    error: null,
    del: "",
    singleData: "",
    updateData: "",
    createPost: "",
  },
  loading: false,

  extraReducers: {
    [getEcommerseProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getEcommerseProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.allDataProduct = action.payload;
    },
    [getEcommerseProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deletePost.pending]: (state, action) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.del = action.payload;
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [editData.pending]: (state, action) => {
      state.loading = true;
    },
    [editData.fulfilled]: (state, action) => {
      state.singleData = action.payload;
      state.loading = false;
    },
    [editData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [editPost.pending]: (state, action) => {
      state.loading = true;
    },
    [editPost.fulfilled]: (state, action) => {
      state.updateData = action.payload;
      state.loading = false;
    },
    [editPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addPost.pending]: (state, action) => {
      state.loading = true;
    },
    [addPost.fulfilled]: (state, action) => {
      state.createPost = action.payload;
      state.loading = false;
    },
    [addPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export default ECommerseSlice.reducer;
