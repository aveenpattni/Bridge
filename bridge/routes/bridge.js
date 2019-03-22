const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Activity = require('../models/activity');
const isAuthenticated = require('../middleware/token');

//Checks if any request made to this route has an authenticated token
router.use(isAuthenticated);

//Get personal user Profile
router.get("/auth", (req, res) => {
  //Token is validated
  res.json({
    token: "valid"
  });
});

router.get("/connections/:email", async (req, res) => {
  let user = await User.findOne({
    email: req.params.email
  });
  let foundItems = await User.find({
    email: {
      $in: user.connections
    }
  });
  res.json(foundItems);
})

router.get("/addlist/:email", async (req, res) => {
  let user = await User.findOne({
    email: req.params.email
  });
  let foundItems = await User.find({
    type: "student",
    email: {
      $nin: user.connections
    }
  });
  //This is where the matching algorithm must take place
  res.json(foundItems);
});

router.put("/adduser/:email", async (req, res) => {
  //Add connection to Mentor document
  let query = {email: req.body.mentor};
  let update = {
    $push: { connections: req.body.student}
  }
  let newMentorConnection = await User.findOneAndUpdate(
    query, update, { new:true, runValidators:true });
  //Add connection to Student document
  query = {email: req.body.student};
  update = {
    $push: { connections: req.body.mentor}
  }
  let newStudentConnection = await User.findOneAndUpdate(
    query, update, { new:true, runValidators:true });
  //Create Activity for Mentor
  let newMentorActivity = new Activity({
    email: req.body.mentor,
    type: "connection",
    body: `You are now connected with ${req.body.student}.` 
  });
  newMentorActivity.save();
  //Create Activity for Student
  let newStudentActivity = new Activity({
    email: req.body.student,
    type: "connection",
    body: `You are now connected with ${req.body.mentor}.` 
  });
  newStudentActivity.save();
  res.json(req.body);
});

router.put("/delete/:email", async (req, res) => {
  //Remove connection to Mentor document
  let query = {email: req.body.mentor};
  let update = {
    $pull: { connections: req.body.student}
  }
  let newMentorConnection = await User.findOneAndUpdate(
    query, update, { new:true, runValidators:true });
  //Remove connection to Student document
  query = {email: req.body.student};
  update = {
    $pull: { connections: req.body.mentor}
  }
  let newStudentConnection = await User.findOneAndUpdate(
    query, update, { new:true, runValidators:true });
  //Create Activity for Mentor
  let newMentorActivity = new Activity({
    email: req.body.mentor,
    type: "termination",
    body: `Your connection with ${req.body.student} has been terminated.` 
  });
  newMentorActivity.save();
  //Create Activity for Student
  let newStudentActivity = new Activity({
    email: req.body.student,
    type: "termination",
    body: `Your connection with ${req.body.mentor} has been terminated.` 
  });
  newStudentActivity.save();
  res.json(req.body);
});

router.get("/activity/:email", async (req, res) => {
  let foundItems = await Activity.find({
    email: req.params.email
  }).sort({dateCreated: -1})
  res.json(foundItems);
})

module.exports = router;