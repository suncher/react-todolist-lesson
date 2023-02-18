import { createSlice , PayloadAction } from '@reduxjs/toolkit';
import uuid from "react-uuid";
export const ColumnSlice = createSlice({
    name: 'column',
    initialState: {
        columns: [
            {
                id: uuid(),
                title: 'To Do',
                tasks: [],
            },
            {
                id: uuid(),

                title: 'In Progress',
                tasks: [],
            },
            {
                id: uuid(),
                title: 'Done',
                tasks: [],
            },
        ],
    },
    reducers: {
        addColumn: (state, action: PayloadAction<string>) => {
            state.columns.push({
                id: uuid(),
                title: action.payload,
                tasks: [],
            });
        },
        removeColumn: (state, action: PayloadAction<string>) => {
            state.columns = state.columns.filter((column) => column.id !== action.payload);
        },
        addTask:(state,action:PayloadAction<string>) => {
            
        },
        removeTask:(state,action:PayloadAction<string>) => {

        },
    },
});

export const { addColumn, removeColumn ,removeTask,addTask} = ColumnSlice.actions;

export default ColumnSlice.reducer