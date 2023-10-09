import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../App.css'
function Home() {
    const [Allproject,setAllproject]=useState([]);
    const [Project,setProject]=useState({
        pname:'',
        pdetail:'',
        pgit:''
    });
    useEffect(()=>{
        try{
            axios.get('http://localhost:8000/project').then((response)=>{setAllproject(response.data)});
        }catch(e){
            console.log(e);
        } 
    })
    function handlechange(e){
        const { name, value } = e.target;
        setProject(project => ({
          ...project,
          [name]: value
        }));
    }
    async function addproject(event){
        event.preventDefault();
        const res=await axios.post('http://localhost:8000/project',Project)
        if(res){
            console.log("Project added")
        }
        else{
        console.log("Project not added")
        }
        window.location.reload();
    }
    return ( <>
    <div>
 
    <div className='container'>
    <h1>Add new Project</h1>
    Project Name : <input type="text" className='inputField' placeholder='Project name' name='pname' value={Project.pname} onChange={handlechange}/><br/>
    Project Detail : <input type="text" className='inputField' placeholder='Project details' name='pdetail' value={Project.pdetail} onChange={handlechange}/><br/>
    Project Link : <input type="text" className='inputField' placeholder='Project Git link' name='pgit' value={Project.pgit} onChange={handlechange}/><br />
    <button className='submitButton' onClick={addproject}>submit</button>
    </div>
  
   
    </div>
    <h1 >My Projects</h1>
   <div className='cardContainer'>
   
    {
        Allproject.map(project=>(
            <div className='card'>
                <p className='cardTitle'>Project Name : {project.pname}</p>
                <p className='cardContent'>Project Deatils : {project.pdetail}</p>
                <a className='cardContent' href="https://github.com/21IT008/SGP_PROJECT">Project Link</a>
            </div>
        ))
    }
   </div>
    
    </>);
}

export default Home;