const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const hbs = require("hbs");
const UnderGraduateModel = require("../models/UnderGraduate")


const app = express();
app.use(express.json());
app.use(cors());

const connectionString = "mongodb+srv://avishka1999perera:Avishka@login.ufmfqma.mongodb.net/Login?retryWrites=true&w=majority"

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  
  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });
  
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

app.post('/api/register',(req,res)=>{
    UnderGraduateModel.create(req.body)
    .then(userData => res.json(userdata))
    .catch(err => res.json(err))
})


// app.get("/login",(req,res) => {
//     res.render("login")
// })

// app.get("/signup",(req,res) => {
//     res.render("signup")
// })




const port = 3001;
app.listen(port, () => {
    console.log(`server running on port : ${port}`)
})