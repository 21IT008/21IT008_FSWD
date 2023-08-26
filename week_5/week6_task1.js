const dotenv=require('dotenv')
require("dotenv").config();
const path=require('path')
const readline=require('readline');
// console.log(process.env)
// console.log(process.env.PASS) 
const r=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r.question("ENTER METHOD : ",function(string){
dotenv.config({
path:path.resolve(`.env.${string}`)
})
console.log(process.env.NAME)
})

