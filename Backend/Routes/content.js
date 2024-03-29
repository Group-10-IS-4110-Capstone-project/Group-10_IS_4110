// contentRoutes.js
const express = require('express');
const Router = express.Router();
const {createContent,updateContent,deleteContent, getAllContent} = require("../Controllers/contentController");
const { verifyToken } = require('../middleware/protectRoute');


// Create Content
Router.post('/create',verifyToken,createContent);

// Update Content
Router.put('/update/:id',verifyToken,updateContent);

// Delete Content
Router.delete('/delete/:id',verifyToken,deleteContent);

//get all content
Router.get('/getAllcontent',verifyToken, getAllContent);

module.exports = Router;
