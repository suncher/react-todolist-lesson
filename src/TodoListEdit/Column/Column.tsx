import React from 'react'
import { List } from 'antd'
import Columnheader from './header/ColumnHeader';
import ColumnItem from './Item/ColumnItem';
interface ColumnProps {
    colCategory: { id: string; label: string; tasks: string[]; };
    handleDeleteItem: (categoryColId: string, task: string) => void;
    handleDeleteColumn: (categoryColId: string) => void;
    handleOpenModalEditColumn: () => void;
}

const Column = ({ colCategory, handleDeleteItem,handleDeleteColumn , handleOpenModalEditColumn}: ColumnProps) => {
    

    return (
        <List   
            header={
                <Columnheader colCategory={colCategory} 
                handleOpenModalEditColumn={handleOpenModalEditColumn} 
                handleDeleteColumn={handleDeleteColumn} />
            }
            dataSource={colCategory.tasks}
            renderItem={(item) => ( 
                <List.Item style={{ backgroundColor: "lightgray" }}>
                    <ColumnItem  colCategory={colCategory} item={item} handleDeleteItem={handleDeleteItem} />
                </List.Item>
            )}
            style={{
                flex: 1,
                margin: "8px",
            }}
        />
    )
}

export default Column