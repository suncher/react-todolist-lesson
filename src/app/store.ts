import { configureStore } from "@reduxjs/toolkit";
import ColumnSlice from "../TodoListRedux/features/ColumnReducer";

const store = configureStore({
  reducer: {
    reduxColumn: ColumnSlice,
  },
});

export default store;