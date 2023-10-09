const express=require('express')
const cors=require('cors')
require('./conn')
const app = express()
app.use(express.json())
app.use(cors())
const Project =require('./model/Project')
app.listen(8000,console.log("server created"))
app.post('/project',(req,res)=>{
    try{
        const newProject= new Project(req.body)
        newProject.save()
        res.json(newProject)
    }catch(e){
        res.json(e)
    }
})
app.get('/project',async (req,res)=>{
    const projects=await Project.find()
    res.json(projects)
})