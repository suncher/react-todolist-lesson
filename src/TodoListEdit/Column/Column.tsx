import React from 'react'
import { List } from 'antd'
import Columnheader from './header/ColumnHeader';
import ColumnItem from './Item/ColumnItem';
interface ColumnProps {
    colCategory: { id: string; label: string; tasks: string[]; };
    handleDeleteItem: (categoryColId: string, task: string) => void;
    handleDeleteColumn: (categoryColId: string) => void;
    openEditColumnModal: () => void;
    openEditItemModal: () => void;
}

const Column = ({ colCategory, handleDeleteItem,handleDeleteColumn,openEditColumnModal,openEditItemModal }: ColumnProps) => {
    

    return (
        <List  
            
            header={
                <Columnheader colCategory={colCategory} 
                handleOpenEditColumnModal={openEditColumnModal}
                handleDeleteColumn={handleDeleteColumn} />
            }
            dataSource={colCategory.tasks}
            renderItem={(item) => ( 
                <List.Item style={{ backgroundColor: "lightgray" }}>
                    <ColumnItem  colCategory={colCategory} task={item} handleDeleteItem={handleDeleteItem} handleOpenEditItemModal={openEditItemModal} />
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