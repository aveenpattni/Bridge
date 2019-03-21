const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Mentor = require('../models/mentor');
const Student = require('../models/student');
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
router.get("/user/:email", async (req, res) => {
  //Find user in User database
  var foundUser = await User.findOne({
    email: req.params.email
  });
  let type = foundUser.type;
  //If mentor, return Mentor profile
  if(type === "mentor"){
    var foundMentor = await Mentor.findOne({
      email: req.params.email
    })
    foundMentor = foundMentor.toObject();
    delete foundMentor.password;
    res.json(foundMentor);
  }
  //If student, return Student profile 
  else{
    var foundStudent = await Student.findOne({
      email: req.params.email
    })
    foundStudent = foundStudent.toObject();
    delete foundStudent.password;
    res.json(foundStudent);
  }
})
router.get("/connections/:email", async (req, res) => {
  // let returnArray = [];
  // var foundUser = await User.findOne({
  //   email: req.params.email
  // });
  // let type = foundUser.type;
  // if(type === "mentor"){
  //   var foundMentor = await Mentor.findOne({
  //     email: req.params.email
  //   })
  //   foundMentor = foundMentor.toObject();
  // }
  // else{
  //   var foundStudent = await Student.findOne({
  //     email: req.params.email
  //   })
  //   foundStudent = foundStudent.toObject();
  // }
  res.json([{test: "val"}]);
})

module.exports = router;