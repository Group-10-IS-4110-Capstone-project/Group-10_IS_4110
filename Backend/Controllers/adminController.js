const bcrypt = require("bcrypt");
const AdminModel = require("../models/Admin");
const UnderGraduate = require("../models/UnderGraduate");

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

//User Search
const searchUsers = async (req, res) => {
  try {
    const { firstName } = req.body;

    // Construct a query object based on the provided parameters
    const query = {};

    if (firstName) {
      query.firstName = new RegExp(`^${firstName}`, 'i'); // Start with the provided letter
    }

    // Find users that match the query or retrieve all users if no criteria specified
    const users = await (firstName ? UnderGraduate.find(query, 'firstName lastName email') : UnderGraduate.find({}, 'firstName lastName email'));

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//user Accounts display
const displayUsers = async (req, res) => {
  try {
    // Retrieve all users
    const users = await UnderGraduate.find({}, 'firstName lastName university email');

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//user Account delete
const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the user exists
    const user = await UnderGraduate.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete the user
    await UnderGraduate.findByIdAndDelete(userId);

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//admin login => userController  **************

module.exports = { adminRegister , searchUsers ,displayUsers , deleteUserById};
