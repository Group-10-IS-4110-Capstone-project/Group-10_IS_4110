const express = require("express");
const {sendMessage} = require("../Controllers/messageController")
const {protectRoute} = require("../middleware/protectRoute")

const Router = express.Router();

Router.post("/send/:id",sendMessage); // add protectRoute

module.exports = Router;