const mongoose = require('mongoose');

const advertisementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  Picture: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  createdByName: {
    type: String, // Store the name of the user who created the advertisement (admin/expert)
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AdvertisementModel = mongoose.model('Advertisement', advertisementSchema);

module.exports = AdvertisementModel;