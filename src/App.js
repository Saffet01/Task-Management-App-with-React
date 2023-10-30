import { useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {

  const createTask = (title, taskDesc) => {
    console.log("Title: ", title);
    console.log("Task Description: ", taskDesc);

    const createdTasks = [...tasks, {
      id: Math.round(Math.random()*99999),
      title: title,
      taskDesc: taskDesc
    }];
    setTasks(createdTasks);
  };

  const [tasks, setTasks] = useState([]);

  const deleteTaskById = (id) => {
    console.log(id);
    const afterDeletingTasks = tasks.filter((task)=>{
      return task.id !== id;
    })
    setTasks(afterDeletingTasks);
  }

  return (
    <div className="App">
      <TaskCreate OnCreateProps={createTask}/>
      <h2 className='tasks-title'>Tasks</h2>
      <TaskList tasks={tasks} onDelete={deleteTaskById}/>
    </div>
  );
}

export default App;
