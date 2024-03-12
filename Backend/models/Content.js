const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema(
  {
    Picture: String,
    Subject: String,
    Description: String,
    Name: String,
    createdBy: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to your User model if applicable
        required: true,
      },
      createdByName: String,
      userType: String,
    },
  },
  { timestamps: true }
);

const ContentModel = mongoose.model("Content", ContentSchema);

module.exports = ContentModel;
