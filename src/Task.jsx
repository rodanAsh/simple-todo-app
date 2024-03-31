import React from 'react'

const Task = ({todo,handleDeleteTask,handleCompletedTask}) => {
  return (
    <div className='task-list'>
        {
          todo.map((task) => {
            return (
              <div className='task' key={task.id}>
                <h3 style={{textDecoration: task.isCompleted ? "line-through" : "none"}}>{task.taskName}</h3>
                <div>
                  <button className='btn green' onClick={() => handleCompletedTask(task.id)}>Done</button>
                  <button className='btn red' onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </div> 
              </div>
            )
          })
        }
      </div>
  )
}

export default Task