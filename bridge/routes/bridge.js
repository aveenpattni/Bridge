const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Activity = require('../models/activity');
const isAuthenticated = require('../middleware/token');
const score = require('../Utilities/score');
var sortBy = require('sort-by');

//Checks if any request made to this route has an authenticated token
router.use(isAuthenticated);

//Get personal user Profile
router.get("/auth", async (req, res) => {
  let user = await User.findOne({
    email: req.user.user.email
  });
  user = user.toObject();
  delete user.password;
  res.json(user);
});

//Gets list of current connections
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

//Get list of new students to connect with for mentors
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
  //This is where the matching algorithm takes place
  let scoreList = [];
  for (let item of foundItems) {
    item = item.toObject();
    item.score = score(user, item)
    scoreList.push(item);
  }
  scoreList.sort(sortBy('-score'));
  scoreList.splice(3);
  //
  res.json(scoreList);
});

router.put("/adduser/:email", async (req, res) => {
  //Add connection to Mentor document
  let query = { email: req.body.mentor };
  let update = {
    $push: { connections: req.body.student }
  }
  let newMentorConnection = await User.findOneAndUpdate(
    query, update, { new: true, runValidators: true });
  //Add connection to Student document
  query = { email: req.body.student };
  update = {
    $push: { connections: req.body.mentor }
  }
  let newStudentConnection = await User.findOneAndUpdate(
    query, update, { new: true, runValidators: true });
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
  let query = { email: req.body.mentor };
  let update = {
    $pull: { connections: req.body.student },
    // $push: { pastConnections: req.body.student}
  }
  let newMentorConnection = await User.findOneAndUpdate(
    query, update, { new: true, runValidators: true });
  //Remove connection to Student document
  query = { email: req.body.student };
  update = {
    $pull: { connections: req.body.mentor },
    // $push: { pastConnections: req.body.mentor}
  }
  let newStudentConnection = await User.findOneAndUpdate(
    query, update, { new: true, runValidators: true });
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
  }).sort({ dateCreated: -1 })
  res.json(foundItems);
});

router.put("/settings/account/:email", async (req, res) => {
  //Update User information
  let query = { email: req.params.email };
  let update = req.body;
  let options = { new: true, runValidators: true };
  let updatedUser = await User.findOneAndUpdate(
    query, update, options);
  //Create Activity
  let newActivity = new Activity({
    email: req.params.email,
    type: "update",
    body: "You updated your account information."
  });
  newActivity.save();
  delete updatedUser.password;
  res.json(updatedUser);
});

router.get("/connections/receiver/:recID", async (req, res) => {
  var foundUser = await User.findOne({
    _id: req.params.recID
  });
  foundUser = foundUser.toObject();
  delete foundUser.password;
  res.json(foundUser);
})

module.exports = router;