import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, taskDesc) => {
    // console.log("Title: ", title);
    // console.log("Task Description: ", taskDesc);

    const response = await axios.post("http://localhost:3004/tasks", {
      title,
      taskDesc,
    });

    console.log(response);

    const createdTasks = [...tasks, response];
    setTasks(createdTasks);
  };

  const fetchTask = async () => {
    const response = await axios.get("http://localhost:3004/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTask();
  });

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3004/tasks/${id}`);

    // console.log(id);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = async (id, updatedTitle, updatedDescription) => {
    await axios.put(`http://localhost:3004/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedDescription,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: id,
          title: updatedTitle,
          taskDesc: updatedDescription,
        };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate OnCreateProps={createTask} />
      <h2 className="tasks-title">Tasks</h2>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
