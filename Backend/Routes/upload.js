const express = require("express");
const router = express.Router();
const uploadController = require("../Controllers/uploadController");
const multer = require("multer");

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
// const uploadimg = multer({ dest: 'uploads/' });

// Route to handle profile picture upload
router.post(
  "/uploadpic",
  upload.single("profilePic"),
  uploadController.uploadProfilePic
);
router.post(
  "/uploadpicex",
  upload.single("profilePic"),
  uploadController.uploadProfilePicEx
);

// router.post('/upload', upload.single('image'), (req, res) => {
//     // Handle the uploaded image
//     res.status(200).json({ message: 'Image uploaded successfully' });
//   });

const path = require("path");

const storageimg = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + extension);
  },
});

const uploadimg = multer({ storage: storageimg });

router.post("/upload", uploadimg.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const imagePath = req.file.path;
  res.status(200).json({ message: "Image uploaded successfully", imagePath });
});

module.exports = router;
