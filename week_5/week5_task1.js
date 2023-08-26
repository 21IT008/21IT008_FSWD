const express=require('express');
const email=require('./week5_email_task4');
const app=express();
app.use(express.json());
let products=[];
app.post('/products',(req,res)=>{
    const {id,name,price}=req.body;
    if(!id || !name || !price){
        res.json({Error:"invalid input"});
    }
    const newproduct={id:id,name:name,price:price};
    products.push(newproduct);
    res.status(201).json(newproduct);
})
app.get('/products',(req, res) =>{
    res.status(200).json(products);
})

app.get('/products/:id',(req, res) =>{
    const id=req.params.id;
const found=products.find(p=>p.id==id);
if(!found){
    res.json("product not found");
}
console.log(found);
res.json(found);
})
app.put('/products/:id',(req, res)=>{
    const id1=req.params.id;
    const {id,name,price}=req.body;
    const found=products.findIndex(p=>p.id==id1);
    const newproduct={id:id,name:name,price:price};
    products[found]=newproduct;
    res.status(200).json(products);
})
app.delete('/products/:id',(req, res)=>{
    const id=req.params.id;
    console.log(id);
    const found=products.findIndex(p=>p.id==id);
    if(found==-1){
        res.json("product not found");
    }

    else{
        console.log(found);
        console.log(products[found]);
    products.pop(found);
    }
    res.json("deleted");
})
app.get('/contactus',(req, res)=>{
    email();
    res.send('sent successfully');
})
app.listen(8000,()=>{
    console.log("listening to port 8000");
})