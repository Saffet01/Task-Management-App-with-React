import React, { useState } from "react";

//OnCreateProps burada yarattığımız title ve description textlerini props olarak, App.js sayfasına göndermek amacı taşıyor.
function TaskCreate({ OnCreateProps, task, taskFormUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    // console.log("title: ", title);
  };

  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleTaskDesc = (event) => {
    setTaskDesc(event.target.value);
    // console.log("Task Description: ", taskDesc);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(taskFormUpdate){
      onUpdate(task.id, title, taskDesc);
    }else{
      OnCreateProps(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="form-update-layout">
          <h2>Update task in below</h2>
          <form className="task-form" action="" onSubmit={handleSubmit}>
            <label>Update the Task Title</label>
            <input
              value={title}
              onChange={handleTitleChange}
              className="title-label"
              type="text"
            />
            <label htmlFor="">Update the Task Information</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskDesc}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button onClick={handleSubmit} className="create-btn">
              Save
            </button>
          </form>
        </div>
      ) : (
        <div className="form-layout">
          <h2>Define your task in below</h2>
          <form className="task-form" action="" onSubmit={handleSubmit}>
            <label>Task Title</label>
            <input
              value={title}
              onChange={handleTitleChange}
              className="title-label"
              type="text"
            />
            <label htmlFor="">Task Information</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskDesc}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button onClick={handleSubmit} className="create-btn">
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
