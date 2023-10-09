const express = require('express')
const app = express();
app.use(express.json());
const router=express.Router();

const Todo=require('../Model/Todo');

router.post('/todo',(req,res)=>{
    try{
        const newTodo=new Todo(req.body);
        newTodo.save();
        res.json(newTodo);
    }catch(err){
        res.json(err.message);
    }
})

router.get('/todo',async (req,res)=>{
    const newTodo=await Todo.find();
    res.json(newTodo);
})

// router.get('/todo/:id',async (req,res)=>{
//     console.log(req.params.id);
//     const newTodo=await Todo.findById(req.params.id);
//     if(newTodo){
//     res.json(newTodo);
//     }else{
//         res.json("no data found");
//     }
// })

// router.put('/todo/:id',async (req,res)=>{
//     const newTodo=await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
//     if(newTodo){
//         res.json(newTodo)
//     }else{
//         res.json("no data found")
//     }
// })

router.delete('/todo/:id',async (req,res)=>{
    try{
        await Todo.findByIdAndDelete(req.params.id)
        res.json("deleted successfully")
    }catch(err){
        res.json("no data found")
    }
})

module.exports = router;