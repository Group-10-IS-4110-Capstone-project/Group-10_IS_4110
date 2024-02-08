const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const hbs = require("hbs");
const UnderGraduateModel = require("../models/UnderGraduate")
const bcrypt = require('bcrypt');


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



app.post('/api/register', async (req, res) => {
  try {
      const { firstName, lastName, university, email, password } = req.body;

      // Hash the password before storing it
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const user = await UnderGraduateModel.create({
          firstName,
          lastName,
          university,
          email,
          password: hashedPassword,
      });

      res.json(user);
  } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.post('/api/login', async (req, res) => {
  try {
      const { email , password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      const lowercasedEmail = email.toLowerCase();
      const user = await UnderGraduateModel.findOne({ email : lowercasedEmail});

      if (user) {
          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) {
              res.json({ message: 'success' });
          } else {
              res.json({ message: 'Incorrect password' });
          }
      } else {
          res.json({ message: 'User not found' });
      }
  } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});



const port = 3001;
app.listen(port, () => {
    console.log(`server running on port : ${port}`)
})