// task 1
let a="om"
const b=20
var c=`my name is ${a} and i am ${b} years old .hi how are you`
document.getElementById("root").innerHTML=c;

// task 2
function maths(a,b){
let sum=a+b
let dif=a-b
let mul=a*b
let quo=a/b
return (`for 5 and 20 sum is ${sum}. difference is ${dif}. multiplication is ${mul}. division is ${quo}`)
}
let ans=maths(20,5)
document.getElementById("root1").innerHTML=ans

//task 3
let age=prompt("enter your age")
let message;
if(age<18)
message='you are a minor'
else if(age>=18 && age <65)
message='you are an adult'
else
message='you are a senior citizen'
console.log(message)
document.getElementById("root2").innerHTML=message

// task 4
let array=[20000,10000,60000,80000,50000];
function getsalary(salary){
    const max=Math.max(...salary)
    const min=Math.min(...salary) 
    return (`maximum is ${max} and minimum is ${min}`)
}
let ans1=getsalary(array)
console.log(ans1)
document.getElementById("root3").innerHTML=ans1;

// task 5
const book1={
    title : "title 1",
    name:"author 1"
}
const book2={
    title : "title 2",
    name:"author 2"
}
const book3={
    title : "title 3",
    name:"author 3"
}
const book4={
    title : "title 4",
    name: "author 4"
}

let x=[book1,book2,book3,book4],ans2;
function books(x){
    for(const item of x){
        console.log(item.name)
    }
}
books(x);

// task 6
function task6(){
    let a1=5;
    var b1=10;
    const c1=15;
}
// console.log(a1+" "+b1+" "+c1);

// task 7
function handleclick(){
    document.getElementById("root4").style.backgroundColor="red";
    document.getElementById("root4").innerHTML="clciked";
}

//task 8
function checkerror(a){
    try{
        if(a<0){
            throw new Error ("negative number");
        }
    }catch(e){
        alert(e.message);
    }
}
checkerror(prompt("enter a number"));

// task 9


