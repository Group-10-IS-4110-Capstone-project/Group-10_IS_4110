const ExpertModel = require("../models/Expert");
const bcrypt = require("bcrypt");
const hbs = require("hbs");

//-----expert register

const expertRegister = async (req, res) => {
  
  const emailRegex = /^[^\s@]+@gmail\.com$/;

  try {
    const { Name, companyName, jobFeild, workExperience, email, password } =
      req.body;

    const isValidGmailAddress = emailRegex.test(email.toLowerCase());
    if (!isValidGmailAddress) {
      return res.status(400).json({ message: "Invalid Gmail address format" });
    }

    const existingUser = await ExpertModel.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password before storing it
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const expert = await ExpertModel.create({
      Name,
      companyName,
      jobFeild,
      workExperience,
      email,
      password,
    });

    res.json(expert);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//--expert login--

const expertLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const lowercasedEmail = email.toLowerCase();
    const expert = await ExpertModel.findOne({ email: lowercasedEmail });

    if (expert) {
      const passwordMatch = await bcrypt.compare(password, expert.password);

      if (passwordMatch) {
        res.json({ message: "success" });
      } else {
        res.json({ message: "Incorrect password" });
      }
    } else {
      res.json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { expertRegister, expertLogin };
