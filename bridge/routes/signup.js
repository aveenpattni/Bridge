const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const Mentor = require('../models/mentor');
const User = require('../models/user');

//Create user profile
router.post("/", (req, res) => {
  if(req.body.type === "mentor") {
    //create new user in DB
    let credentials = {
      type: "mentor",
      email: req.body.email,
      password: req.body.password
    };
    let newUser = User(credentials);
    newUser.save().catch(err=>{
      res.status(500).send("something broke");
    })
    //Create new mentor in DB
    let newMentor = Mentor(req.body);
    newMentor.save()
    .then(mentor=>{
      delete mentor.password;
      res.json(mentor)
    }).catch(err=>{
      res.status(500).send("Something Broke");
    });
  } else{
    //create new user in DB
    let credentials = {
      type: "student",
      email: req.body.email,
      password: req.body.password
    };
    let newUser = User(credentials);
    newUser.save().catch(err=>{
      res.status(500).send("something broke");
    })
    //Create new student in DB
    let newStudent = Student(req.body);
    newStudent.save().then(student=>{
        delete student.password;
        res.json(student);
      }).catch(err=>{
      res.status(500).send("Something Broke");
    });
  }
});

module.exports = router;