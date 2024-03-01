const express = require("express");
const Router = express.Router();

const {createAdvertisement,updateAdvertisement,deleteAdvertisement} = require("../Controllers/advertisementController")

Router.post('/create',createAdvertisement);

// Update Content
Router.put('/update/:id',updateAdvertisement);

// Delete Content
Router.delete('/delete/:id',deleteAdvertisement);

module.exports = Router;