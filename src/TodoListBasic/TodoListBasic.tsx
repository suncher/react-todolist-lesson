
import React, { useState } from "react";
import uuid from "react-uuid";

interface ListItem {
  id: string;
  label: String;
}

const TodoListBasic = () => {
 
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
    <>
      <section>
        <div>
          <input onChange={(e: any) => setTasks(e.target.value)} />
          <select onChange={(e: any) => setProgressStatus(e.target.value)}>
            {optionValue.map((value) => (
              <option value={value.value}>{value.label}</option>
            ))}
          </select>
          <button onClick={handleAddToDoOnClick}>Add to list</button>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <h3>To Do</h3>
            <ul>
              {todo.map(({id,label}) => (
                <li key={id}>{label}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>In Progress</h3>
            <ul>
              {inProgress.map(({id,label}) => (
                <li key={id}>{label}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Done</h3>
            <ul>
              {done.map(({id,label}) => (
                <li key={id}>{label}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoListBasic;
