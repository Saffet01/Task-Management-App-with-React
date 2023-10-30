import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {

  const createTask = (title, taskDesc) => {
    console.log("Title: ", title);
    console.log("Task Description: ", taskDesc);
  };

  return (
    <div className="App">
      <TaskCreate OnCreateProps={createTask}/>
      <h2>Tasks</h2>
      <TaskList/>
    </div>
  );
}

export default App;
