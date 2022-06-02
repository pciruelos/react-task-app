import { useState } from "react"
import React from 'react'

const TaskCreator = (props) => {

    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = e =>  setNewTaskName(e.target.value);

    const createNewTask = () => { 
        props.agregar(newTaskName);
        setNewTaskName('') }; 

  return (
    <div className='my-1'>
        <input type="text"
        className='form-control'
        value={newTaskName}
        onChange={updateNewTaskValue} />

        <button className="btn btn-warning mt-1" onClick={createNewTask}>
            add task
        </button>
        </div>
  )
}

export default TaskCreator