const express = require("express")
const Router = express.Router();
const {userTest, userRegister, userLogin, forgotPassword , changePassword, logOut,updateUser, getUserById} = require("../Controllers/userController");
const { verifyToken } = require('../middleware/protectRoute');



Router.post("/test",userTest)

//signup and signin part for undergraduate
Router.post("/register",userRegister)
Router.post("/login",userLogin)
Router.post("/forgotpassword",forgotPassword)
Router.post("/changepassword/:id/:token",changePassword)
Router.get("/logout",logOut)
Router.get('/undergraduates/:id', getUserById);
Router.put('/updateuser/:id', updateUser)




module.exports = Router