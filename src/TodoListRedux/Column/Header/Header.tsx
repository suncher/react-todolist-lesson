import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

interface HeaderInterface {
    label: string;

}

const Header = ({ label}: HeaderInterface) => {
    return (
        <div style={{display:'flex'}}>
            {label}

            <Button
                type="primary"
                size="small"
                icon={<EditOutlined />}
                onClick={() => {}}
            />

            <Button
                type="primary"
                danger
                size="small"
                icon={<CloseOutlined />}
                onClick={() => {}}
            />
        </div>
    );
};

export default Header;
