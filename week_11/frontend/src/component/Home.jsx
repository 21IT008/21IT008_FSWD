import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../App.css'

export default function Home() {
    const [Alltask,setAlltask]=useState([]);
    const [Task,setTask]=useState({
        title:'',
        description:'',
        status:false
    });

    useEffect(() => {
        try{
            axios.get('http://localhost:8000/todo').then((response) =>{setAlltask(response.data)})
        }catch(e){
            console.error(e);
        } 
    },Alltask)

    async function addTask(event){
        event.preventDefault();
        const res=await axios.post('http://localhost:8000/todo',Task)
        if(res){
            console.log("Task added")
        }
        else{
        console.log("Task not added")
        }
        window.location.reload();
    }

    function handlechange(e){
        const { name, value } = e.target;
        setTask(task => ({
          ...task,
          [name]: value
        }));
    }

function deleteTask(id){
    console.log("deleting")
    console.log(id)
axios.delete(`http://localhost:8000/todo/${id}`).then((res)=>{
    console.log("Task deleted")
    window.location.reload();
})
}

    return ( 
    <>
    <div className="main-todo">
   <div className="inner-todo">
   
        <h2>TODO LIST</h2>
        <div>
        <input type="text" placeholder='Add Task Title' name='title' value={Task.title} onChange={handlechange}/>
        <input type="text" placeholder='Add Task Description' name='description' value={Task.description} onChange={handlechange} />
        <button onClick={addTask}>submit</button>
        </div>
        All TASKS
        {Alltask.map(task => (  
          <div className='box' key={task._id}><p className='title'>Title : {task.title}</p>
             <p className='dis'>Description : {task.description}</p>
                <button onClick={()=>deleteTask(task._id)}>delete</button>
          </div>
        ))}
         </div>
         </div>
    </> );
}
