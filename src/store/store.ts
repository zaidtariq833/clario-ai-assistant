import { configureStore } from "@reduxjs/toolkit";
import ieltsBandCalculateReducer from "@/store/slices/ieltsBandCalculateSlice";

export const store = configureStore({
  reducer: {
    ieltsCalculate: ieltsBandCalculateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
