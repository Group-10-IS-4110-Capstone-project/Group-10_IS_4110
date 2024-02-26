const mongoose = require("mongoose");
const Message = require("./MessageModel");

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: "LoginUndergraduate"
        },
    ],
    messages: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Message" ,
           default: [],
        },
    ],
},{timestamps: true})

const Conversation = mongoose.model("Conversation",conversationSchema);

module.exports = Conversation;