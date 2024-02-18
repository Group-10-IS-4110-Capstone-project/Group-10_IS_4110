const express = require("express");
const Router = express.Router();
const {sendMessage} = require("../Controllers/messageController")

Router.post("/send/:id",sendMessage);

module.exports = Router;