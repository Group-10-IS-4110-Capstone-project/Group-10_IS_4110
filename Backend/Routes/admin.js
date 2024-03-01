const express = require("express");
const Router = express.Router();
const {adminRegister, searchUsers ,displayUsers, deleteUserById} = require("../Controllers/adminController");
const { verifyToken } = require("../middleware/protectRoute");

Router.post("/register",adminRegister);
Router.get('/search',verifyToken, searchUsers);
Router.get('/displayusers',verifyToken, displayUsers);
Router.delete('/deleteuser/:id',verifyToken, deleteUserById);





module.exports = Router;