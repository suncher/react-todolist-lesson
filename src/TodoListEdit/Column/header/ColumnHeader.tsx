import React from 'react'
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface headerColumn {
    colCategory: { id: string; label: string; tasks: string[]; };
    handleDeleteColumn: (categoryColId: string) => void;
    handleOpenEditColumnModal: () => void;

}
const ColumnHeader = ({ colCategory, handleDeleteColumn, handleOpenEditColumnModal }: headerColumn) => {
    return (
        <div style={{ display:'flex',justifyContent:'center'  }}>
            <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
                {colCategory.label}
            </h3>
            <div >
                <Button
                    icon={<EditOutlined />}
                    type="primary"
                    onClick={() => handleOpenEditColumnModal}
                >
                </Button>
                <Button
                    icon={<DeleteOutlined />}
                    type="primary"
                    danger
                    onClick={() => handleDeleteColumn(colCategory.id)}
                >
                </Button>
            </div>
        </div>

    )
}

export default ColumnHeader