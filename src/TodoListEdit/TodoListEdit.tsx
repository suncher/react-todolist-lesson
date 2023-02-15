import React, { ChangeEventHandler, useState } from "react";
import uuid from "react-uuid";
import { Button, List } from "antd";
import { DeleteOutlined } from "@ant-design/icons/lib/icons";
import { EditOutlined } from "@ant-design/icons/lib/icons";
import AddColumn from "./addColumn/AddColumn";
import AddItem from "./addItem/AddItem";
import Column from "./Column/Column";
import ColumnModal from "./ColumnModal/ColumnModal";


interface ListItem {
  id: string;
  label: string;
  tasks: string[];
}

const TodoListEdit = () => {
  const [newColumnOfCategory, setNewColumnOfCategory] = useState<ListItem[]>(
    []
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
      if (!categoryCol.tasks.find(task => task.trim() === tasks.trim())) {
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
  const handleDeleteColumn = (categoryColId: string) => {
    setNewColumnOfCategory(
      newColumnOfCategory.filter((categoryCol) => categoryCol.id !== categoryColId)
    );
  };
  const handleOpenModalEditColumn = () => {
    console.log("handleOpenModalEditColumn");
    setIsModalOpen(true);
  };
  const handleCloseModalEditColumn = () => {
    setIsModalOpen(false);
  };

  
  return (
    <main>
      <section>
        <AddColumn handleOnChangeColumn={handleOnChangeColumn} handleAddNewColumn={handleAddNewColumn} />
        <AddItem handleOnChangeTasks={handleOnChangeTasks} 
        handleOnChangeSelect={handleOnChangeSelect} 
        handleAddToListOnClick={handleAddToListOnClick} 
        newColumnOfCategory={newColumnOfCategory} 
        />
        <div style={{ display: "flex" }}>
          {newColumnOfCategory.map((colCategory) => {
            return (
              <div>
                <Column key={colCategory.id} colCategory={colCategory} handleDeleteColumn={handleDeleteColumn}  handleOpenModalEditColumn={handleOpenModalEditColumn} handleDeleteItem={handleDeleteItem} />
                <ColumnModal isModalOpen={isModalOpen} />
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
};
export default TodoListEdit;

