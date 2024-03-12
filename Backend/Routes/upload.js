const express = require('express');
const router = express.Router();
const uploadController = require('../Controllers/uploadController');
const multer = require('multer');

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// Route to handle profile picture upload
router.post('/uploadpic', upload.single('profilePic'), uploadController.uploadProfilePic);

module.exports = router;