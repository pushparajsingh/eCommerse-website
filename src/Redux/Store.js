import { configureStore } from "@reduxjs/toolkit";
import ECommerseSlice from "./Slice/ECommerseSlice";

export const store = configureStore({
  reducer: ECommerseSlice,
});
