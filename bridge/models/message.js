const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema ({
  sender: {
    type: ObjectId,
    required: true
  },
  receiver: {
    type: ObjectId,
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