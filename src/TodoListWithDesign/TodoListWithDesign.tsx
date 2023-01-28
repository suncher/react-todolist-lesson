import React, { ChangeEventHandler, useState } from "react";
import uuid from "react-uuid";
import { Input, Select, Button, List } from "antd";

interface ListItem {
  id: string;
  label: string;
  tasks: string[];
}

const TodoListWithDesign = () => {
  const [newColumnOfCategory, setNewColumnOfCategory] = useState<ListItem[]>(
    []
  );
  const [tasks, setTasks] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const handleOnChangeColumn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
  const handleOnChangeTasks = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTasks(e.target.value);
  };
  const handleOnChangeSelect = (e: string) => {
    setCategory(e);
  };
  const handleAddNewColumn = () => {
    const newItem = {
      id: uuid(),
      label: category,
      tasks: [],
    };
    newColumnOfCategory.find((categoryCol) => categoryCol.label.trim() === newItem.label.trim())
      ? alert("This column already exists")
      : setNewColumnOfCategory([...newColumnOfCategory, newItem]);
  };
  const handleAddToListOnClick = () => {
    let categoryCol = newColumnOfCategory.find(categoryCol => categoryCol.id === category);
    if (categoryCol) {
      if(!categoryCol.tasks.find(task => task.trim() === tasks.trim())) {
        categoryCol.tasks.push(tasks);
        setNewColumnOfCategory([...newColumnOfCategory]);
      } else {
        alert("This task already exists");
      }
      
    }
  };

  const handleDeleteItem = (categoryColId: string, task: string) => {
    let categoryCol = newColumnOfCategory.find(
      (categoryCol) => categoryCol.id === categoryColId
    );
    if (categoryCol) {
      categoryCol.tasks = categoryCol.tasks.filter((tasks) => tasks !== task);
      setNewColumnOfCategory([...newColumnOfCategory]);
    }
  };
  return (
    <main>
      <section>
        <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
          <Input placeholder="Add Column" onChange={handleOnChangeColumn} />
          <Button type="primary" onClick={handleAddNewColumn}>
            Add Column
          </Button>
        </div>
        <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
          <Input placeholder="Add Tasks" onChange={handleOnChangeTasks} />
          <Select
            placeholder="Select Column"
            onChange={handleOnChangeSelect}
            style={{ width: "150px" }}
          >
            {newColumnOfCategory.map(({ id, label }) => (
              <Select.Option value={id}>{label}</Select.Option>
            ))}
          </Select>
          <Button type="primary" onClick={handleAddToListOnClick}>
            Add To List
          </Button>
        </div>
        <div style={{ display: "flex" }}>
          {newColumnOfCategory.map((colCategory) => {
            return (
              <List
                key={colCategory.id}
                header={
                  <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
                    {colCategory.label}
                  </h3>
                }
                dataSource={colCategory.tasks}
                renderItem={(item) => (
                  <List.Item style={{ backgroundColor: "lightgray" }}>
                    {item}{" "}
                    <Button
                      type="primary"
                      danger
                      onClick={() => handleDeleteItem(colCategory.id, item)}
                    >
                      Supprimer
                    </Button>
                  </List.Item>
                )}
                style={{
                  flex: 1,
                  margin: "8px",
                }}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};
export default TodoListWithDesign;
