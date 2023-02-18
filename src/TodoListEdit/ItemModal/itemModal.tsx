<<<<<<< HEAD
import { Input, Modal, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Column, Item } from '../TodoListEdit';

interface ItemModalInterface {
    item: Item | undefined;
    columns: Column[];
    onCloseItem(): void;
    onSaveItem(newItem: Item): void;
}

const ItemModal = ({
    item,
    onCloseItem,
    onSaveItem,
    columns,
}: ItemModalInterface) => {
    const [newItemName, setNewItemName] = useState<string>();
    const [newItemColumn, setNewItemColumn] = useState<string>();

    useEffect(() => {
        setNewItemName(item?.label);
        setNewItemColumn(item?.columnId);
    }, [item]);

    const handleOnSave = () => {
        if (newItemName && item && newItemColumn) {
            onSaveItem({
                ...item,
                label: newItemName,
                columnId: newItemColumn,
            });
        }
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(e.target.value);
    };

    const handleOnCategoryChange = (newValue: string) => {
        setNewItemColumn(newValue);
    };

    return (
        <Modal
            title="Item edition"
            open={item !== undefined}
            onOk={handleOnSave}
            okText="Save"
            onCancel={onCloseItem}
            className="todo-list-edit-item-modal"
        >
            <Input value={newItemName} onChange={handleOnChange} />
            <Select
                placeholder="Select column"
                onChange={handleOnCategoryChange}
                value={newItemColumn}
                options={columns}
            />
        </Modal>
    );
};

export default ItemModal;
=======
import React , { useState } from 'react'
import { Button , Input , Modal } from 'antd'
  interface ColumnModalProps {  
    isModalOpen: boolean;
  }
function ItemModal({ isModalOpen }: ColumnModalProps) {
  console.log(isModalOpen);
  return (
    <Modal
        title="Update Item"
        open={isModalOpen}
        onOk={() => {}}
        onCancel={() => {}}
        footer={[
          <Button key="back" onClick={() => {}}>
            Cancel
          </Button>,
          <Button key="submit" type="primary"  onClick={() => {}}>
            Update
          </Button>,
        ]}
      >
        <Input placeholder="Change Data" />

      </Modal>
  )
}

export default ItemModal
>>>>>>> 85286a40d0353ccce7bb9ebe99e6e225807ab56c
