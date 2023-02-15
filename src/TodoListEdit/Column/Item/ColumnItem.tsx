import React from 'react'
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface ItemColumn {
    colCategory: { id: string; label: string; tasks: string[]; };
    item: string;
    handleDeleteItem: (categoryColId: string, task: string) => void;
}
const ColumnItem = ({ colCategory, item, handleDeleteItem }: ItemColumn) => {
    return (
        <div style={{display:'flex'}}>
            <h5 style={{textAlign: "center"}}>
                {item}
            </h5>
            <Button
                icon={<EditOutlined />}
                type="primary"
                onClick={() => handleDeleteItem(colCategory.id, item)}
            >
            </Button>
            <Button
                icon={<DeleteOutlined />}
                type="primary"
                danger
                onClick={() => handleDeleteItem(colCategory.id, item)}
            >
            </Button>
        </div>
    )
}

export default ColumnItem