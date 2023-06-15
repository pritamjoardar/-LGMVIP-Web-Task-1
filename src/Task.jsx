import React from 'react'

const Task = ({tittle,description,deleteTask,index}) => {
  return (
   <>
   <div className="con">
   <div className="task">
    <div className="frist"><p>{tittle}</p><p>{description}</p></div>
    <div className="second" onClick={()=>{deleteTask(index)}}><span class="material-symbols-outlined">delete</span></div>
   </div>
   </div>
   </>
  )
}

export default Task
