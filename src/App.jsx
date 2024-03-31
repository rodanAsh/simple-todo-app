import './App.css'
import { useState } from 'react'
import Task from './Task'

function App() {
  const [todo,setTodo] = useState([])
  const [taskName,setTaskName] = useState("")

  // create new task
  const handleAddTask = () => {
    const task = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      taskName: taskName,
      isCompleted: false
    }
    setTodo([...todo,task])
    setTaskName("")
  }

  // delete existing task
  const handleDeleteTask = (id) => {
    setTodo(todo.filter((task) => task.id !== id))
  }

  // update task
  const handleCompletedTask = (id) => {
    setTodo(todo.map((task) => {
      if(task.id === id){
        return {...task,isCompleted:true}
      }
      return task
    }))
  }

  return (
    <div className='container'>
      {/* Input Field */}
      <div className='task-input'>
        <input 
          type="text" 
          value = {taskName}
          onChange = {(e) => setTaskName(e.target.value)}
        />
        <button className='btn blue' onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Task List */}
      <Task 
        todo={todo} 
        handleDeleteTask={handleDeleteTask} 
        handleCompletedTask={handleCompletedTask} 
      />
    </div>
  )
}

export default App
