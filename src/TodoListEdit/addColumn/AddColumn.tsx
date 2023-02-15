import React from 'react'
import { Input, Button } from 'antd'

interface handleChange {
  handleOnChangeColumn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddNewColumn: () => void;
  
}
const AddColumn = ({ handleOnChangeColumn, handleAddNewColumn}:handleChange) => {
  return (
    <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
      <Input placeholder="Add Column" onChange={handleOnChangeColumn} />
      <Button type="primary" onClick={handleAddNewColumn}>
        Add Column
      </Button>
    </div>


  )
}

export default AddColumn