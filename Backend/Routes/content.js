// contentRoutes.js
const express = require('express');
const Router = express.Router();
const {createContent,updateContent,deleteContent} = require("../Controllers/contentController");


// Create Content
Router.post('/create',createContent);

// Update Content
Router.put('/update/:id',updateContent);

// Delete Content
Router.delete('/delete/:id',deleteContent);

module.exports = Router;
