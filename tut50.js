//Asynchronous or non-blocking
//line by line execution not guaranted
//callbacks will fire

const fs = require("fs");
fs.readFile("readf.txt","utf-8", (err,data)=>{
    console.log(data);
});
console.log("tHIS IS  message");
//console.log(text);