const url=require('url');
const qs=require('querystring');
const path=require('path');
const readline=require('readline');
const fs=require('fs');
const r=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


//task 1
// r.question ("Please enter URL: ",function (string){
//     geturl=url.parse(string);
//     console.log(geturl.protocol);
//     console.log(geturl.host);
//     console.log(geturl.pathname);
//     console.log(qs.parse(geturl.query));
// })


//task 2
// let base_url,mypath;
// function generateurl(base_url,mypath){
//     return url.resolve(base_url,mypath);
// }
// r.question("enter base url and path separate by ',': ",function (string){
//     [base_url,mypath]=string.split(',');
//     console.log(generateurl(base_url,mypath));
// })


//task 3
// r.question ("Please enter URL with parameters: ",function (string){
//     geturl=url.parse(string);
//     console.log(qs.parse(geturl.query));
// })


//task 4
// r.question ("Enter path's of two files separate by ',': ",function (string){
//     let [firstfile,secondfile]=string.split(',');
//     if(path.relative(firstfile,secondfile)==0){
//         console.log("Both path refer to same file.")
//     }
//     else{
//         console.log("Both path don't refer to same file.")
//     }
// })


//task 5
// r.question ("Enter path of file: ",function (string){
//     console.log(path.extname(string))
// })


//task 6
// r.question ("Enter path of file: ",function (string){
//     console.log(`Directory name : ${path.dirname(string)}`);
//     console.log(`base name : ${path.basename(string)}`);
// })


//task 7
filepath="../week_3/arithmetic.js";
function checkpath(filepath){
    try{    
        fs.access(filepath,function(error,data){
            if(error){
                throw new Error("file not found");
            }
            else{
                console.log("file exists");
            }
        })
        
    }catch(e){
        console.log(e.message);
    }
}
checkpath(filepath);