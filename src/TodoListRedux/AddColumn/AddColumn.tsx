import { Input, Button } from 'antd';
import React, { useState } from 'react';
import { addColumn } from '../features/Column/ColumnSlice';
import { useDispatch } from 'react-redux';


export const AddColumn = () => {
    const dispatch = useDispatch();
    const [newColumnName, setColumnName] = useState<string>('');
    const handleOnColumnNameChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setColumnName(e.target.value);
    };

    return (
        <div className="todo-list-edit-add-column">
            <Input
                placeholder="Column name"
                onChange={handleOnColumnNameChange}
                value={newColumnName}
            />

            <Button
                disabled={!newColumnName.length}
                onClick={() => dispatch(addColumn(newColumnName))}
            >
                Add column
            </Button>
        </div>
    );
};

export default AddColumn;
