const express= require('express');
const app= express();
const cors= require('cors');

const todorouter=require('./Routes/routing');
app.use(cors());
app.listen(8000,() => console.log("listening on 8000"));
app.use(express.json());
app.use('/',todorouter);

require('./connection/conn.js')

