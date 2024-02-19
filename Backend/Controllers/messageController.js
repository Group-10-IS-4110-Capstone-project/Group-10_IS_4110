const Conversation = require("../models/Conversation");
const Message = require("../models/MessageModel");

const sendMessage = async(req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    // const senderId = req.user._id
    const senderId = '65cef9e13a81a8b010e02470'


    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId]}
    })

    if(!conversation){
        conversation = await Conversation.create({
            participants: [senderId, receiverId],
        });
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        message,
    })

    if(newMessage){
        conversation.messages.push(newMessage._id)
    }

    await  promise.all([conversation.save(), newMessage.save()])

    res.status(201).json(newMessage);

  } catch (error) {
    console.log("Error in sendMessage controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { sendMessage };
