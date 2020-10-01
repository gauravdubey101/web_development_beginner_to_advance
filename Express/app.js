const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//serving static filenode
app.use('/static',express.static('static'));

//set the template engine as pug
app.set('view engine', 'pug');

//set the view directory
app.set('views', path.join(__dirname, 'views'))

//set pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{title:'Hey everyone',message:'hello there! trying to do run pug'});
});



app.get("/",(req,res)=>{
    res.status(200).send("This is my first express app.");
});

app.get("/about",(req,res)=>{
    res.send("This is about page of  my first express app.");
});

//post method
app.post("/about",(req,res)=>{
    res.send("This is post request about page of  my first express app.");
});


app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})