import React, { useState } from "react";
import uuid from "react-uuid";
import { Input, Select, Button, List } from "antd";
interface ListItem {
  id: string;
  label: String;
}

const TodoListEdit = () => {
  const optionValue: Array<{ value: string; label: string }> = [
    { value: "todo", label: "To do" },
    { value: "inProgress", label: "In Progress" },
    { value: "done", label: "Done" },
  ];
  const [tasks, setTasks] = useState<String>("");
  const [todo, setTodo] = useState<ListItem[]>([]);
  const [inProgress, setInProgress] = useState<ListItem[]>([]);
  const [done, setDone] = useState<ListItem[]>([]);
  const [progressStatus, setProgressStatus] = useState<String>("todo");
  const handleAddToDoOnClick = () => {
    const newItem = {
      id: uuid(),
      label: tasks,
    };
    switch (progressStatus) {
      case "todo":
        setTodo([...todo, newItem]);
        break;
      case "inProgress":
        setInProgress([...inProgress, newItem]);
        break;
      case "done":
        setDone([...done, newItem]);
        break;
      default:
        break;
    }
  };
  return (
    <main>
      <section>
        <div>
          <Input onChange={(e: any) => setTasks(e.target.value)} />
          <Select onChange={(e: any) => setProgressStatus(e.target.value)}>
            {optionValue.map((value) => (
              <Select.Option value={value.value}>{value.label}</Select.Option>
            ))}
          </Select>
          <Button onClick={handleAddToDoOnClick}>Add to list</Button>
        </div>
      </section>
    </main>
  );
};
export default TodoListEdit;
