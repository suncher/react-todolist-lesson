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