//Import mongoose to create the Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the schema with all of it's respective attributes
const mentorSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  location: {
    address: {
      type: String,
      required: true
    },
    postal: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  },
  imageURL: {
    type: String,
    required: true,
    default: "https://drive.google.com/uc?id=1p1jEevY632oVZzGxvde0aC-1rwG5Oo6W"
  },
  bio: {
    type: String,
    required: true
  },
  currentPosition: {
    type: String
  },
  company: {
    type: String,
    required: true
  },
  yearsExperience: {
    type: Number,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  interests: {
    type: [String],
    required: true
  },
  studentLimit: {
    type: Number,
    required: true
  },
  connections: {
    type: [ObjectId],
    required: true
  },
  pastConnections: {
    type: [ObjectId],
    required: true
  },
  dateCreated: {
    type: Date,
    required: true,
    default: new Date()
  },
  dateUpdated: {
    type: Date,
    required: true,
    default: new Date()
  }
});

const Mentor = mongoose.model('Mentor', mentorSchema);
module.exports = Mentor;