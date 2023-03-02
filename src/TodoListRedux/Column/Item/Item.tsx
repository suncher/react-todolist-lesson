import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import { List, Button } from "antd";

import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../features/ColumnReducer";
interface ItemInterface {
  label: string;
  id: string;
}

const Item = ({ label, id }: ItemInterface) => {
  const dispatch = useDispatch();

  return (
    <List.Item className="todo-list-edit-item">
      {label}
      <div className="todo-list-edit-item-action">
        <Button
          type="primary"
          size="small"
          icon={<EditOutlined />}
          onClick={() => dispatch(updateItem(id))}
        />
        <Button
          type="primary"
          danger
          size="small"
          icon={<CloseOutlined />}
          onClick={() => dispatch(removeItem(id))}
        />
      </div>
    </List.Item>
  );
};

export default Item;
