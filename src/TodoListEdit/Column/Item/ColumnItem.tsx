import React from 'react'
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface ItemColumn {
    colCategory: { id: string; label: string; tasks: string[]; };
    task: string;
    handleDeleteItem: (categoryColId: string, task: string) => void;
    handleOpenEditItemModal: () => void;
}
const ColumnItem = ({ colCategory, task, handleDeleteItem, handleOpenEditItemModal }: ItemColumn) => {
    return (
        <div style={{display:'flex'}}>
            <h5 style={{textAlign: "center"}}>
                {task}
            </h5>
            <Button
                icon={<EditOutlined />}
                type="primary"
                onClick={() => handleOpenEditItemModal}
            >
            </Button>
            <Button
                icon={<DeleteOutlined />}
                type="primary"
                danger
                onClick={() => handleDeleteItem(colCategory.id, task)}
            >
            </Button>
        </div>
    )
}

export default ColumnItem