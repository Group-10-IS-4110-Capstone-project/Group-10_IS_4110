const express = require("express");
const Router = express.Router();

const {createAdvertisement,updateAdvertisement,deleteAdvertisement} = require("../Controllers/advertisementController");
const { verifyToken } = require("../middleware/protectRoute");

Router.post('/create',verifyToken,createAdvertisement);

// Update Content
Router.put('/update/:id',verifyToken,updateAdvertisement);

// Delete Content
Router.delete('/delete/:id',verifyToken,deleteAdvertisement);

module.exports = Router;