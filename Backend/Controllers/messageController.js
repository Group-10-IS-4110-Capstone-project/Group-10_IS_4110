const Conversation = require("../models/Conversation");
const ExpertModel = require("../models/Expert");
const Message = require("../models/MessageModel");
const UnderGraduateModel = require("../models/UnderGraduate");


const sendMessage = async (req, res) => {
  try {
    const { message,senderId } = req.body;
    // const { id } = req.params;
    const receiverId = req.params.id;
    // const senderId = req.user._id
    // const senderId = "65e17aeb93b702152ad1a698";

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({

        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    return res.status(201).json({type:"sucess",msg:newMessage.message});
  } catch (error) {
    console.log("Error in sendMessage controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


//get messages

const getMessage = async (req, res) => {
  try {
    const {id: userToChatId} = req.params;
    // const senderId = "65cef9e13a81a8b010e02470";
    const senderId = req.params.id

    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, userToChatId] },
      }).populate("messages");

      if(!conversation) return res.status(200).json([]);

      const messages = conversation.messages;

      return res.status(200).json(messages);

  } catch (error) {
    console.log("Error in sendMessage controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


//getusersforsidebar

const getUsersForSideBar = async(req, res) => {

  //undergraduate
  try {
    const loggedInUserId = req.user._id  //if logged in

    const filteredUsers = await ExpertModel.find().select("-password")

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUserForSideBar",error);
    res.status(500).json({error:"Internal server error"});
  }
}


module.exports = { sendMessage, getMessage, getUsersForSideBar };
