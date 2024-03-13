const express = require("express");
const Router = express.Router();
const {adminRegister, searchUsers ,displayUsers,displayExperts, deleteUserById, deleteExpertById} = require("../Controllers/adminController");
const { verifyToken } = require("../middleware/protectRoute");

Router.post("/register",adminRegister);
Router.get('/search',verifyToken, searchUsers);
Router.get('/displayusers',verifyToken,displayUsers);
Router.get('/displayExperts',verifyToken, displayExperts);
Router.delete('/deleteuser/:id', deleteUserById);
Router.delete('/deleteexpert/:id', deleteExpertById);





module.exports = Router;