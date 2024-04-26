import React from "react";
import { useState } from "react";

function Task({ text, category}) {
  const [tasks, setTasks] = useState([])

  function handleDeleteClick() {
   const remainingTasks = setTasks(tasks.filter(task => task.text !== text))

   setTasks(remainingTasks)
  }
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=> handleDeleteClick()} className="delete">X</button>
      <div>{}</div>
    </div>
  );
}

export default Task;
