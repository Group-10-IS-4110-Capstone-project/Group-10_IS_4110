const bcrypt = require("bcrypt");
const AdminModel = require("../models/Admin");

//Admin SignUp *****************
let adminCreated = false;

const adminRegister = async (req, res) => {
  try {
    if (adminCreated) {
      return res
        .status(400)
        .json({ message: "Admin has already been registered" });
    }

    const email = "sweetchoice@gmail.com";
    const password = "Avi123San";

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const admin = await AdminModel.create({
      email,
      password: hashedPassword,
    });

    adminCreated = true; 

    res.json({ message: "Admin registered Successfully" });
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//admin login => userController  **************

module.exports = { adminRegister };
