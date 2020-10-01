const express = require("express")

const app = express();
const port = 80;

//serve static filenode
app.use('/static',express.static('static'));
//set the template engine as pug

app.set('view engine', 'pug');

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