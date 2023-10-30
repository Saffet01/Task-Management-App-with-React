import React from "react";

function TaskItem({ task, onDelete }) {
  console.log(task);

  const handleDeleteClick = () => {
    onDelete(task.id);
  }

  return (
    <div className="task-card">
      <h3>Task: </h3>
      <p>{task.title}</p>

      <h4>Task Description: </h4>
      <p className="task-card-desc">{task.taskDesc}</p>

      <div className="task-card-btn-area">
        <button className="task-card-btn delete-btn" onClick={handleDeleteClick}>Delete</button>
        <button className="task-card-btn update-status-btn">Update Status</button>
      </div>
    </div>
  );
}

export default TaskItem;
