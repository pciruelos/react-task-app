import { useState, useEffect } from "react";
import React from "react";

import TaskRow from "./components/TaskRow";
import TaskBanner from "./components/TaskBanner";
import TaskCreator from './components/TaskCreator';
import VisualControl from './components/VisualControl';

function App() {
  const [userName, setuserName] = useState("Ciru");
  const [taskItems, setTaskItems] = useState([
    { name: "task one", done: false },
    { name: "task two", done: false },
    { name: "task three", done: true },
    { name: "task four", done: false },
  ]);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data != null) {
      setTaskItems(JSON.parse(data))
    }
    else {
      setuserName('pablo ejemplo')
      setTaskItems([
        { name:"Example task cuz there is no data", done: false },
    { name: "Example task cuz there is no data", done: false },
    { name: "Example task cuz there is no data", done: true },
    { name: "Example task cuz there is no data", done: false },
  ])
  setShowCompleted(true);
    }
    
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [taskItems])
  
  

  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems,{name:taskName , done:false}])
    }
  }

  const toggleTask = task =>
  setTaskItems(taskItems.map( t => (t.name === task.name ? {...t, done : !t.done} : t )))

  const taskTableRows = (doneValue) =>
    taskItems
    .filter(task => task.done === doneValue )
    .map(task  => <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>);

  return (
    <div className="App">
      <TaskBanner Name={userName} listadetareas={taskItems}/>
      <TaskCreator agregar={createNewTask} />
      <table className="table table-striped table-border">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(false)}</tbody>
      </table>
      <div className="bg-secondary text-white text-center p-2">
        <VisualControl 
        callback={checked => setShowCompleted(checked)} 
        description={'Completed task'} 
        isCheked={showCompleted} />
      </div>
      {
        showCompleted && ( 
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {
                taskTableRows(true)
              }
            </tbody>
          </table>
        )
      }


    </div>
  );
}

export default App;
