import React from 'react'
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface headerColumn {
    colCategory: { id: string; label: string; tasks: string[]; };
    handleDeleteColumn: (categoryColId: string) => void;
    handleOpenModalEditColumn: (colCategory: {}) => void;

}
const ColumnHeader = ({ colCategory, handleDeleteColumn,handleOpenModalEditColumn }: headerColumn) => {
    return (
        <div style={{ display:'flex',justifyContent:'center'  }}>
            <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
                {colCategory.label}
            </h3>
            <div style={{position:'absolute',right:"0px"}}>
                <Button
                    icon={<EditOutlined />}
                    type="primary"
                    onClick={() => handleOpenModalEditColumn}
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