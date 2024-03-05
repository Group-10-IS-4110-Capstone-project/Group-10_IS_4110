const AdminModel = require("../models/Admin");
const AdvertisementModel = require("../models/Advertisement");
const ExpertModel = require("../models/Expert");


// Controller to create a new advertisement
const createAdvertisement = async (req, res) => {
    try {
      const { Picture,title, content } = req.body;
      const userId = '65d78a2a6ea712e95b14143c'; // Replace with the actual user ID or use middleware to get it
  
      // Fetch user details to determine userType and createdByName
      const expert = await ExpertModel.findById(userId);
  
      let createdByName;
      if (expert) {
        createdByName = expert.Name;
      } else {
        const adminUser = await AdminModel.findById(userId);
        if (!adminUser) {
          return res.status(404).json({ error: 'User not found' });
        }
        createdByName = 'Admin';
      }
  
      const newAdvertisement = new AdvertisementModel({
        Picture,
        title,
        content,
        createdByName,
      });
  
      await newAdvertisement.save();
  
      res.json({ message: 'Advertisement created successfully', advertisement: newAdvertisement });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  // Controller to update an existing advertisement
const updateAdvertisement = async (req, res) => {
    try {
      const advertisementId = req.params.id;
      const { Picture,title, content } = req.body;
  
      const advertisement = await AdvertisementModel.findById(advertisementId);
  
      if (!advertisement) {
        return res.status(404).json({ error: 'Advertisement not found' });
      }
  
      advertisement.title = title;
      advertisement.content = content;
      advertisement.Picture = Picture;
  
      await advertisement.save();
  
      res.json({ message: 'Advertisement updated successfully', advertisement });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  // Controller to delete an existing advertisement
const deleteAdvertisement = async (req, res) => {
    try {
      const advertisementId = req.params.id;
  
      const advertisement = await AdvertisementModel.findByIdAndDelete(advertisementId);
  
      if (!advertisement) {
        return res.status(404).json({ error: 'Advertisement not found' });
      }
  
      res.json({ message: 'Advertisement deleted successfully', advertisement });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports = {createAdvertisement,updateAdvertisement,deleteAdvertisement}