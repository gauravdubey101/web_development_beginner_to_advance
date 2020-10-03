const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;




//EXPRESS SPECIFIC 
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//pug specific
app.set('views engine','pug');
app.set('views',path.join(__dirname,'views'));

//endpoints

app.get('/',(req,res)=>{
   
    const params = { }
    res.status(200).render('index.pug',params);
});


app.listen(port,()=>{
    console.log(`The appliction started succesfully on port ${port}`);
});