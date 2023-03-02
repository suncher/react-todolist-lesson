import { Input, Button } from "antd";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addColumn } from "../features/ColumnReducer";

const AddColumn = () => {
  const dispatch = useDispatch();
  
  const [newColumnName, setColumnName] = useState<string>("");

  const handleOnColumnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnName(e.target.value);
  };

  const handleOnClickNewColumn = () => {
    dispatch(addColumn(newColumnName));
    setColumnName("");
  };

  return (
    <div className="todo-list-edit-add-column">
      <Input
        placeholder="Column name"
        onChange={handleOnColumnNameChange}
        value={newColumnName}
      />

      <Button disabled={!newColumnName.length} onClick={handleOnClickNewColumn}>
        Add column
      </Button>
    </div>
  );
};

export default AddColumn;
