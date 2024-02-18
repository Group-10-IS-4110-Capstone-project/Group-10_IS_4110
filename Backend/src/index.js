const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
// const hbs = require("hbs");
// const UnderGraduateModel = require("../models/UnderGraduate")
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');

const users = require("../Routes/users")
const experts = require("../Routes/expert")
const message = require("../Routes/message")


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

app.use("/user", users)
app.use("/expert",experts)
app.use("/message",message)

// app.post('/api/register', async (req, res) => {
//   try {
//       const { firstName, lastName, university, email, password } = req.body;

//       // Hash the password before storing it
//       const saltRounds = 10;
//       const hashedPassword = await bcrypt.hash(password, saltRounds);

//       const user = await UnderGraduateModel.create({
//           firstName,
//           lastName,
//           university,
//           email,
//           password: hashedPassword,
//       });

//       res.json(user);
//   } catch (error) {
//       console.error('Error creating user:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// });




// app.post('/api/login', async (req, res) => {
//   try {
//       const { email , password } = req.body;

//       if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//       }

//       const lowercasedEmail = email.toLowerCase();
//       const user = await UnderGraduateModel.findOne({ email : lowercasedEmail});

//       if (user) {
//           const passwordMatch = await bcrypt.compare(password, user.password);

//           if (passwordMatch) {
//               res.json({ message: 'success' });
//           } else {
//               res.json({ message: 'Incorrect password' });
//           }
//       } else {
//           res.json({ message: 'User not found' });
//       }
//   } catch (error) {
//       console.error('Error during login:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// });



// app.post('/api/forgotpassword', async (req, res) => {
//   const { email } = req.body;

//   try {
//       // Find the user by email
//       const user = await UnderGraduateModel.findOne({ email });

//       if (!user) {
//           return res.status(404).json({ status: "User not found" });
//       }

//       // Generate a JWT token with user ID and set expiration time
//       const token = jwt.sign({ id: user._id }, "10", { expiresIn: "1h" });

//       // Create a nodemailer transporter with your email credentials
//       const transporter = nodemailer.createTransport({
//           service: 'gmail',
//           auth: {
//               user: 'avishka1999perera@gmail.com', // Replace with your email
//               pass: 'hjba dzmz nhzz rjut' // Replace with your email password
//           }
//       });

//       // Create the reset password link
//       const resetPasswordLink = `http://localhost:3000/changepassword/${user._id}/${token}`;

//       // Define email options
//       const mailOptions = {
//           from: 'yourEmail@gmail.com', // Replace with your email
//           to: user.email,
//           subject: 'Reset your password',
//           text: `Click the link to reset your password: ${resetPasswordLink}`
//       };

//       // Send the email
//       transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//               console.error('Error sending email:', error);
//               return res.status(500).json({ status: "Error sending email" });
//           }

//           console.log('Email sent:', info.response);
//           return res.status(200).json({ status: "Email sent successfully" });
//       });
//   } catch (error) {
//       console.error('Error in forgot password:', error);
//       return res.status(500).json({ status: "Internal Server Error" });
//   }
// });

// app.post("/api/changepassword/:id/:token",(req,res) => {
//     const {id,token} = req.params
//     const {password} = req.body

//     jwt.verify(token, "10", (err, decoded) => {
//         if(err){
//             return res.json({status: "Error with token"})
//         } else{
//             bcrypt.hash(password,10)
//             .then(hash => {
//                 UnderGraduateModel.findByIdAndUpdate({_id: id}, {password: hash})
//                 .then(u => res.send({status: "Success"}))
//                 .catch(err => res.send({status: err}))
//             })
//             .catch(err => res.send({status: err}))
//         }
//     })
// });

const port = 3001;
app.listen(port, () => {
    console.log(`server running on port : ${port}`)
})