const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema ({
  user: {
    type: ObjectId,
    required: true
  },
  type: {
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

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;