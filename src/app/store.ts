import { configureStore } from '@reduxjs/toolkit';
import ColumnReducer from '../TodoListRedux/features/Column/ColumnSlice';
export const store = configureStore({
  reducer: {
    column: ColumnReducer
  },
});