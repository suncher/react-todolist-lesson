import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Column, Item } from "../TodoListRedux";
import uuid from "react-uuid";

interface ColumnState {
  columns: Column[];
  items: Item[];
  itemModal?: Item;
  columnModal?: Column;
}

const initialState: ColumnState = {
  columns: [{
    value: "1", label: "To Do"
  }, {
    value: "2", label: "In Progress"
  }, { value: "3", label: "Done" }],
  items: [{ id: "1", label: "react", columnId: "1" },
  { id: "2", label: "redux", columnId: "2" },
  { id: "3", label: "typescript", columnId: "3" }],
  itemModal: undefined,
  columnModal: undefined,
};

const ColumnSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addColumn: (state, action: PayloadAction<string>) => {
      const newColumn = {
        value: uuid(),
        label: action.payload,
      };
      state.columns.push(newColumn);
    },

    removeColumn: (state, action: PayloadAction<string>) => {
      const columnId = action.payload;
      state.columns = state.columns.filter(
        (column) => column.value !== columnId
      );
      state.items = state.items.filter((item) => item.columnId !== columnId);
    },

    updateColumn: (state, action: PayloadAction<string>) => {
      const column = state.columns.find(
        (column) => column.value === action.payload
      );
      if (column) {
        state.columnModal = column;
      }
    },

    closePopUpColumn: (state) => {
      state.columnModal = undefined;
    },

    saveColumn: (state, action: PayloadAction<Column>) => {
      state.columns = state.columns.map((column) =>
        column.value === action.payload.value ? action.payload : column
      );
      state.columnModal = undefined;
    },
    
    addItem: (
      state,
      action: PayloadAction<{ label: string; columnId: string }>
    ) => {
      const newItem = {
        id: uuid(),
        label: action.payload.label,
        columnId: action.payload.columnId,
      };
      state.items.push(newItem);
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    updateItem: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        state.itemModal = item;
      }
    },

    closePopUpItem: (state) => {
      state.itemModal = undefined;
    },

    saveItem: (state, action: PayloadAction<Item>) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.itemModal = undefined;
    },

   
  },
});

export const {
  addColumn,
  addItem,
  removeItem,
  removeColumn,
  updateItem,
  updateColumn,
  closePopUpItem,
  closePopUpColumn,
  saveItem,
  saveColumn,
} = ColumnSlice.actions;

export default ColumnSlice.reducer;
