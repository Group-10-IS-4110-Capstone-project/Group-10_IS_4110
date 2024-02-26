const hbs = require("hbs");
const UnderGraduateModel = require("../models/UnderGraduate");
const ExpertModel = require("../models/Expert");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const AdminModel = require("../models/Admin");

const userTest = (req, res) => {
  res.send({
    message: "done",
  });
};

//user signup

const userRegister = async (req, res) => {

  const emailRegex = /^[^\s@]+@gmail\.com$/;
  try {
    const { firstName, lastName, university, email, password } = req.body;

    const isValidGmailAddress = emailRegex.test(email.toLowerCase());
    if (!isValidGmailAddress) {
      return res.status(400).json({ message: "Invalid Gmail address format" });
    }

    const existingUser = await UnderGraduateModel.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

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
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//undergraduate and expert login

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const lowercasedEmail = email.toLowerCase();
    const user = await UnderGraduateModel.findOne({ email: lowercasedEmail });

    //undergraduate login

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.json({ message: "success" });
      } else {
        res.json({ message: "Incorrect password" });
      }

      return;
    }

    const expert = await ExpertModel.findOne({ email: lowercasedEmail });

    //expert login
    if (expert) {
      const passwordMatch = await bcrypt.compare(password, expert.password);

      if (passwordMatch) {
        res.json({ message: "success" });
      } else {
        res.json({ message: "Incorrect password" });
      }
      return;
    }

    //admin login

    const admin = await AdminModel.findOne({email: lowercasedEmail});

    if (admin) {
      const passwordMatch = await bcrypt.compare(password, admin.password);

      if (passwordMatch) {
        res.json({ message: "success-admin" });
      } else {
        res.json({ message: "Incorrect password" });
      }
      return;
    }


    res.json({ message: "User/Expert not found" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//*****************/

//forgotpassword------

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user by email
    const user = await UnderGraduateModel.findOne({ email });

    
    if(user){
      // Generate a JWT token with user ID and set expiration time
    const token = jwt.sign({ id: user._id }, "10", { expiresIn: "1h" });

    // Create a nodemailer transporter with your email credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "avishka1999perera@gmail.com", // Replace with your email
        pass: "hjba dzmz nhzz rjut", // Replace with your email password
      },
    });

    // Create the reset password link
    const resetPasswordLink = `http://localhost:3000/changepassword/${user._id}/${token}`;

    // Define email options
    const mailOptions = {
      from: "yourEmail@gmail.com", // Replace with your email
      to: user.email,
      subject: "Reset your password",
      text: `Click the link to reset your password: ${resetPasswordLink}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ status: "Error sending email" });
      }

      console.log("Email sent:", info.response);
      return res.status(200).json({ status: "Email sent successfully" });
    });
    }

    const expert = await ExpertModel.findOne({email});

    if(expert){
      // Generate a JWT token with user ID and set expiration time
    const token = jwt.sign({ id: expert._id }, "10", { expiresIn: "1h" });

    // Create a nodemailer transporter with your email credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "avishka1999perera@gmail.com", // Replace with your email
        pass: "hjba dzmz nhzz rjut", // Replace with your email password
      },
    });

    // Create the reset password link
    const resetPasswordLink = `http://localhost:3000/changepassword/${expert._id}/${token}`;

    // Define email options
    const mailOptions = {
      from: "yourEmail@gmail.com", // Replace with your email
      to: expert.email,
      subject: "Reset your password",
      text: `Click the link to reset your password: ${resetPasswordLink}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ status: "Error sending email" });
      }

      console.log("Email sent:", info.response);
      return res.status(200).json({ status: "Email sent successfully" });
    });
    }

    if (!user && !expert) {
      return res.status(404).json({ status: "User not found" });
    }
    
  } catch (error) {
    console.error("Error in forgot password:", error);
    return res.status(500).json({ status: "Internal Server Error" });
  }
};

//change password ----

const changePassword = (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  jwt.verify(token, "10", (err, decoded) => {
    if (err) {
      return res.json({ status: "Error with token" });
    } else {
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          UnderGraduateModel.findByIdAndUpdate({ _id: id }, { password: hash })
            .then((u) => res.send({ status: "Success" }))
            .catch((err) => res.send({ status: err }));
        })
        .catch((err) => res.send({ status: err }));
    }
  });
};

///logout

const logOut = async(req,res) => {
  try {
    res.cookie("jwt", "10", {maxAge : 0});
    res.status(200).json({message: "Logged out successfully"});
  } catch (error) {
    console.log("Error in logout controller",error)
    res.status(500).json({error: "Internal Server Error"});
  }
}

module.exports = {
  userTest,
  userRegister,
  userLogin,
  forgotPassword,
  changePassword,
  logOut,
};
