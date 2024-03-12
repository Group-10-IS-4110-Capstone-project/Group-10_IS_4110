const fs = require('fs');
const path = require('path');
const UnderGraduateModel = require("../models/UnderGraduate");


exports.uploadProfilePic = (req, res) => {
    const { file } = req;
    const { id } = req.body;


    if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const tempPath = file.path;
    const targetPath = path.join(__dirname, '..', 'uploads', file.originalname);

    fs.rename(tempPath, targetPath, async (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error uploading file', error: err });
        }


        const user = await UnderGraduateModel.findOne({ _id:id });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.profilePic = file.originalname; 

        await user.save();

        return res.status(200).json({ message: 'Profile picture updated successfully', user });

    
    });
};