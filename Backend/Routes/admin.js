const express = require("express");
const Router = express.Router();
const {adminRegister, searchUsers ,displayUsers, deleteUserById} = require("../Controllers/adminController");

Router.post("/register",adminRegister);
Router.get('/search', searchUsers);
Router.get('/displayusers', displayUsers);
Router.delete('/deleteuser/:id', deleteUserById);





module.exports = Router;