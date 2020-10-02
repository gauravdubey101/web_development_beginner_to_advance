const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 80;

//EXPRESS SPECIFIC 
//serving static filenode
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//PUG SPECIFIC 

app.set('view engine', 'pug') //set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //set the view directory



//ENDPOINTS

app.get('/',(req,res)=>{
    const con = "This is the best content on internet so far";
    const params = {'title' : 'Pubg is the best game',"content": con}
    res.status(200).render('index.pug',params);
});

app.post('/',(req,res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite =    `the name of the client is ${name},${age} years old, ${gender}, residing at ${address}. More about him/her :${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params = {'title':'Pubg is the best game'}
    res.status(200).render('index.pug',params);
});



//START THE SERVER

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});