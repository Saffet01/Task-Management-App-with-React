import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskItem({ task, onDelete, onUpdate }) {
  console.log(task);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const [edit, setEdit] = useState(false);

  const handleEditClick = () => {
    setEdit(!edit);
  };

  const handleSubmit = (id, updatedTitle, updatedDescription) => {
    setEdit(false);
    onUpdate(id, updatedTitle, updatedDescription);
  }

  return (
    <div className="task-card">
      {edit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>
      ) : (
        <div>
          <h3>Task: </h3>
          <p>{task.title}</p>

          <h4>Task Description: </h4>
          <p className="task-card-desc">{task.taskDesc}</p>

          <div className="task-card-btn-area">
            <button
              className="task-card-btn delete-btn"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
            <button
              className="task-card-btn update-status-btn"
              onClick={handleEditClick}
            >
              Update Status
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
