import React, { useState } from "react";


//OnCreateProps burada yarattığımız title ve description textlerini props olarak, App.js sayfasına göndermek amacı taşıyor.
function TaskCreate({OnCreateProps}) {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log("title: ", title);
  };

  const [taskDesc, setTaskDesc] = useState("");

  const handleTaskDesc = (event) => {
    setTaskDesc(event.target.value);
    console.log("Task Description: ", taskDesc);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    OnCreateProps(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  }

  return (
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
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}

export default TaskCreate;
