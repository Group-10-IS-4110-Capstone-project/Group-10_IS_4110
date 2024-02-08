const mongoose = require('mongoose')

const UnderGraduateSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    university : String,
    email : String,
    password : String
})

const UnderGraduateModel = mongoose.model("Login", UnderGraduateSchema)

module.exports = UnderGraduateModel;