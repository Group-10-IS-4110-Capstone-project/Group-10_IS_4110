const mongoose = require("mongoose");

const ExpertSchema = new mongoose.Schema({
  
  Name: String,
  companyName: String,
  jobFeild: String,
  workExperience: String,
  email: String,
  password: String,
  bio: String,
  profilePic: String,

});

const ExpertModel = mongoose.model("LoginExpert", ExpertSchema);

module.exports = ExpertModel;
