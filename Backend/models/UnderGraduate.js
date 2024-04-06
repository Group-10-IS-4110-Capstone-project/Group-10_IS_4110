const mongoose = require('mongoose')

const UnderGraduateSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    university : String,
    email : String,
    password : String,
    bio : String, 
    profilePic : String,
},{timestamps: true});


const UnderGraduateModel = mongoose.model("LoginUndergraduate", UnderGraduateSchema)

module.exports = UnderGraduateModel;