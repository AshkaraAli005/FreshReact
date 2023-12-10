import { configureStore } from "@reduxjs/toolkit";
import NotifySlice from "../features/Slices/NotificationSlice";

export const Store = configureStore({
  reducer: { notification: NotifySlice ,},
});
