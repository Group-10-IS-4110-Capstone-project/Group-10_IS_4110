const express = require("express");
const Router = express.Router();
const {expertRegister, expertLogin} = require("../Controllers/expertController") 


Router.post("/register",expertRegister)
Router.post("/login",expertLogin)

module.exports = Router