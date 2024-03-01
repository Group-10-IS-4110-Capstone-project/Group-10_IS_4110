// contentRoutes.js
const express = require('express');
const Router = express.Router();
const {createContent,updateContent,deleteContent} = require("../Controllers/contentController");
const { verifyToken } = require('../middleware/protectRoute');


// Create Content
Router.post('/create',verifyToken,createContent);

// Update Content
Router.put('/update/:id',verifyToken,updateContent);

// Delete Content
Router.delete('/delete/:id',verifyToken,deleteContent);

module.exports = Router;
