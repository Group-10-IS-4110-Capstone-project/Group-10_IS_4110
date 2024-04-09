const express = require("express");
const Router = express.Router();
const {expertRegister, expertLogin, getUsersForSideBar, getUserById, updateUser} = require("../Controllers/expertController"); 
const ExpertModel = require("../models/Expert");


Router.post("/register",expertRegister)
Router.post("/login",expertLogin)
Router.get("/",getUsersForSideBar)
Router.get("/experts/:id",getUserById)
Router.put('/updateuser/:id', updateUser)

// Router.get("/", async (req, res) => {
//     try {
//         const experts = await ExpertModel.find();
//         return res.json(experts);
//     }catch(er) {
//         return res.json({error: true, message: er.message});
//     }
// })

module.exports = Router