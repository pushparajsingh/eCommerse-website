import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";
import AdminSlice from "./Slice/AdminSlice";

export const store = configureStore({
  reducer: {
    users: UserSlice,
    admin: AdminSlice,
  },
});
