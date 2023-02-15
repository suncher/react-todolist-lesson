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

      </Modal>
  )
}

export default ColumnModal