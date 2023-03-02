import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { useDispatch } from "react-redux";
import { removeColumn, updateColumn } from "../../features/ColumnReducer";

interface HeaderInterface {
  label: string;
  value: string;
}

const Header = ({ label, value }: HeaderInterface) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-list-column-header">
      {label}

      <Button
        type="primary"
        size="small"
        icon={<EditOutlined />}
        onClick={() => dispatch(updateColumn(value))}
      />

      <Button
        type="primary"
        danger
        size="small"
        icon={<CloseOutlined />}
        onClick={() => dispatch(removeColumn(value))}
      />
    </div>
  );
};

export default Header;
