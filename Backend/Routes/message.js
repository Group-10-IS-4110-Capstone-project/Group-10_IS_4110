const express = require("express");
const {sendMessage,getMessage,getUsersForSideBar} = require("../Controllers/messageController")

const {protectRoute} = require("../middleware/protectRoute")

const Router = express.Router();


Router.post("/send/:id",sendMessage); // add protectRoute
Router.get("/:id",getMessage); // add protectRoute
// Router.get("/getusersforsidebar", (req, res) => res.json({msg: "done"}))
// Router.get("/getusersforsidebar",getUsersForSideBar);

module.exports = Router;