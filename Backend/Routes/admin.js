const express = require("express");
const Router = express.Router();
const {adminRegister, searchUsers ,displayUsers,displayExperts, deleteUserById} = require("../Controllers/adminController");
const { verifyToken } = require("../middleware/protectRoute");

Router.post("/register",adminRegister);
Router.get('/search',verifyToken, searchUsers);
Router.get('/displayusers', displayUsers);
Router.get('/displayExperts', displayExperts);
Router.delete('/deleteuser/:id', deleteUserById);





module.exports = Router;