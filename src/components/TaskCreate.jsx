import React from 'react'

function TaskCreate() {
  return (
    <div className='form-layout'>
      <h2>Define your task in below</h2>
      <form className='task-form' action="">
        <label htmlFor="">Task Title</label>
        <input className='title-label' type="text" />
        <label htmlFor="">Task Information</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Create</button>
      </form>
    </div>
  )
}

export default TaskCreate
