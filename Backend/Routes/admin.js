const express = require("express");
const Router = express.Router();
const {adminRegister} = require("../Controllers/adminController");

Router.post("/register",adminRegister)



module.exports = Router;