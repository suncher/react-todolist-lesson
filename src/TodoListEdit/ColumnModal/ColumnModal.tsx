<<<<<<< HEAD
import { Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { Column } from '../TodoListEdit';
=======
import React , { useState } from 'react'
import { Button , Input , Modal } from 'antd'
  interface ColumnModalProps {  
    isModalOpen: boolean;
    
  }
function ColumnModal({ isModalOpen }: ColumnModalProps) {
  
  return (
    <Modal
        title="Update Column"
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
>>>>>>> 85286a40d0353ccce7bb9ebe99e6e225807ab56c

interface ColumnModalInterface {
    column: Column | undefined;
    onCloseColumn(): void;
    onSaveColumn(newColumn: Column): void;
}

const ColumnModal = ({
    column,
    onCloseColumn,
    onSaveColumn,
}: ColumnModalInterface) => {
    const [newColumnName, setNewColumnName] = useState<string>();

    useEffect(() => {
        setNewColumnName(column?.label);
    }, [column]);

    const handleOnSave = () => {
        if (newColumnName && column) {
            onSaveColumn({
                ...column,
                label: newColumnName,
            });
        }
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewColumnName(e.target.value);
    };

    return (
        <Modal
            title="Column edition"
            open={column !== undefined}
            onOk={handleOnSave}
            okText="Save"
            onCancel={onCloseColumn}
            className="todo-list-edit-Column-modal"
        >
            <Input value={newColumnName} onChange={handleOnChange} />
        </Modal>
    );
};

export default ColumnModal;
