import lib from "@ant-design/icons";
import React, { useState } from "react";

const TodoListBasic = () => {
  const optionValue: Array<{ value: string; label: string }> = [
    { value: "todo", label: "To do" },
    { value: "inProgress", label: "In Progress" },
    { value: "done", label: "Done" },
  ];
  const [tasks, setTasks] = useState<String>("");
  const [todo, setTodo] = useState<String[]>([]);
  const [inProgress, setInProgress] = useState<String[]>([]);
  const [done, setDone] = useState<String[]>([]);
  const [progressStatus, setProgressStatus] = useState<String>("todo");
  const handleAddToDoOnClick = () => {
    switch (progressStatus) {
      case "todo":
        setTodo([...todo, tasks]);
        break;
      case "inProgress":
        setInProgress([...inProgress, tasks]);
        break;
      case "done":
        setDone([...done, tasks]);
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
              {todo.map((value) => (
                <li>{value}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>In Progress</h3>
            <ul>
              {inProgress.map((value) => (
                <li>{value}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Done</h3>
            <ul>
              {done.map((value) => (
                <li>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoListBasic;
