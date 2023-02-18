<<<<<<< HEAD
import React from 'react';
import { List } from 'antd';
import { Item } from '../TodoListEdit';
import ItemComp from './Item';
import Header from './Header';

interface ColumnInterface {
    value: string;
    label: string;
    columnItems: Item[];
    onDeleteItem(id: string): void;
    onEditItem(id: string): void;
    onEditColumn(id: string): void;
    onDeleteColumn(id: string): void;
}

const Column = ({
    value,
    label,
    columnItems,
    onDeleteItem,
    onEditItem,
    onEditColumn,
    onDeleteColumn,
}: ColumnInterface) => {
    return (
        <List
            className="todo-list-edit-column"
            key={value}
            header={
                <Header
                    label={label}
                    onEditColumn={() => onEditColumn(value)}
                    onDeleteColumn={() => onDeleteColumn(value)}
                />
            }
            dataSource={columnItems}
            renderItem={({ label: itemLabel, id }) => (
                <ItemComp
                    label={itemLabel}
                    id={id}
                    onDeleteItem={() => onDeleteItem(id)}
                    onEditItem={() => onEditItem(id)}
                />
=======
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
            key={colCategory.id}
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
>>>>>>> 85286a40d0353ccce7bb9ebe99e6e225807ab56c
            )}
        />
    );
};

export default Column;
