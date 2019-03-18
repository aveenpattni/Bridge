const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const Mentor = require('../models/mentor');

//Create user profile
router.post("/", (req, res) => {
  if(req.body.type === "mentor") {
    let newMentor = Mentor(req.body);
      newMentor.save().then(mentor=>{
        delete mentor.password;
        res.json(mentor)
      }).catch(err=>{
      res.status(500).send("Something Broke");
    });
  } else{
    let newUser = Student(req.body);
    newUser.save().then(student=>{
        delete student.password;
        res.json(student);
      }).catch(err=>{
      res.status(500).send("Something Broke");
    });
  }
});

module.exports = router;