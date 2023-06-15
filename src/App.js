import { useEffect, useState } from "react";
import "./App.scss"
import Task from "./Task"
function App() {
  const [tasks,setTasks] = useState(localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]);
  const [tittle,setTittle] = useState("");
  const [description,setDescription] = useState("");
  console.log(tittle,description);

  const submitHandler = (e)=>{
    e.preventDefault();
    setTasks([...tasks,{tittle:tittle,description:description}]);
    setTittle("");
    setDescription("");
  };

  const deleteTask =(index)=>{
const filteredArray = tasks.filter((val,i)=>{
  return i!== index ;
});
  setTasks(filteredArray);
  }

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));

  },[tasks])
  return (
    <>
    <div className="nav"><h1>ToDoList</h1></div>
    <form onSubmit={submitHandler} className="container" action="">
      <input type="text" name="" placeholder="Enter here..." id="" value={tittle} onChange={(e)=>{setTittle(e.target.value)}} />
      <textarea placeholder="Description" name="" id="" cols="30" rows="10" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
      <button>Add</button>
      </form>
      <div className="task_con">
      {
        tasks.map((item,index)=>(
    <Task key={index} tittle={item.tittle} description={item.description} deleteTask={deleteTask} index={index}/>
        ))
      }
      </div>
    </>
  );
}

export default App;
