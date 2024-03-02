const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  Picture: String,
  Subject: String,
  Description: String,
  Name:String,

}, { timestamps: true });

const ContentModel = mongoose.model('Content', ContentSchema);

module.exports = ContentModel;
