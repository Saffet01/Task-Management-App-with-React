import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, onDelete}){
  return (
    <div className='task-list'>
        {tasks.map((task) => {
          return (
            <TaskItem key={task.id} task={task} onDelete={onDelete}/>
          )
        })}
    </div>
  )
}

export default TaskList
