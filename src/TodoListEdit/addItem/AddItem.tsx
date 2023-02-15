import React from 'react'
import { Input, Button, Select } from 'antd'


interface handleChange {
    handleOnChangeTasks: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleOnChangeSelect: (e: string) => void;
    handleAddToListOnClick: () => void;
    newColumnOfCategory: { id: string; label: string; tasks: string[]; }[]
}



const AddItem = ({ handleOnChangeTasks, handleOnChangeSelect, handleAddToListOnClick, newColumnOfCategory }: handleChange) => {
    return (
        <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
            <Input placeholder="Add Tasks" onChange={handleOnChangeTasks} />
            <Select
                placeholder="Select Column"
                onChange={handleOnChangeSelect}
                style={{ width: "150px" }}
            >
                {newColumnOfCategory.map(({ id, label }) => (
                    <Select.Option key={id} value={id}>{label}</Select.Option>
                ))}
            </Select>
            <Button type="primary" onClick={handleAddToListOnClick}>
                Add To List
            </Button>
        </div>
    )
}

export default AddItem