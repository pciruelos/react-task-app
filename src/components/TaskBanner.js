import React from 'react'

const TaskBanner = props => {
  return (
    <h4 className="bg-primary text-white text-center p-4">{props.Name} tienes {props.listadetareas.filter(t => !t.done).length} por hacer</h4>
  )
}

export default TaskBanner