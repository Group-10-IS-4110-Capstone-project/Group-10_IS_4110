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
      profilePic,
      password: hashedPassword,
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

const getUsersForSideBar = async(req, res) => {

  //undergraduate
  try {
    // const loggedInUserId = req.user._id  //if logged in

    const filteredUsers = await ExpertModel.find().select("-password")

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUserForSideBar",error);
    res.status(500).json({error:"Internal server error"});
  }
}

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const undergraduate = await ExpertModel.findById(userId);
    if (!undergraduate) {
      return res.status(404).json({ message: "Undergraduate not found" });
    }
    res.json(undergraduate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {

    const userId = req.params.id;
    const { Name, jobField, workExperience, bio } = req.body;

    // Check if the user has a valid token and the token matches the user type
    // if (!req.userId || req.userId !== userId || req.userType !== 'undergraduate') {
    //   return res.status(401).json({ error: 'Unauthorized - Invalid token for this operation' });
    // }

    const user = await ExpertModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.Name = Name;
    user.jobFeild = jobField;
    user.workExperience = workExperience;
    user.bio = bio;

    await user.save();

    res.json({ message: "User updated successfully", user });
   } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { expertRegister, expertLogin ,getUsersForSideBar,getUserById, updateUser};
