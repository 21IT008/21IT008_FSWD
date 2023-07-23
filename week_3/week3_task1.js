import os from"os";
//  const chalk=require("chalk");
import {sum,sub,mul,div} from "./arithmetic.js";
import chalk from 'chalk';
import { upperCase} from "upper-case";
import http from "http";
const server = http.createServer((req, res) => {
    if (req.method == "GET" && req.url == "/osinfo") {
      res.writeHead(200, { "Content-Type": "application/json"});      
    res.end(JSON.stringify({ username : os.userInfo().username,
      homedirectory : os.homedir(),
      platform : os.platform(),
      totalmemory : os.totalmem(),
      freememory : os.freemem(),
      freememorypercentage : ((os.freemem()/os.totalmem())*100).toFixed(2)+"%"
    }));
    }
    else{
      res.writeHead(404, { "Content-Type": "text/plain" });
      console.log(chalk.red(upperCase("error")));
      res.end("path not available");
    } 
  });
  server.listen(8000, () => {
    console.log("listening on port 8000");
  });
sum(5,4);
sub(5,4);
mul(5,4);
div(5,4);
