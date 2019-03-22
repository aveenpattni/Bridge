const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema ({
  chatID: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    required: true,
    default: new Date()
  }
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;