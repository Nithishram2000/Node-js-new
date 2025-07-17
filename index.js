const express =  require('express');
const mongoose = require('mongoose');
//const { User } =require('./models/usermodel');
//const bodyParser = require('body-parser');



const app =express();


// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(bodyParser.json());


let Port=5000

mongoose
//.connect("mongodb+srv://nithishramesh789:123@cluster0.ngltspq.mongodb.net/")
.connect("mongodb://localhost:27017/demo")
.then((e)=>{console.log("data base connected to MONGODB");})
.catch((e)=>{console.log(e);})




app.listen(Port,(e)=>(console.log(`server running on ${Port}`)))