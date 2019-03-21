const express = require('express');
const router = express.Router();
const User = require('../models/user');

//Create user profile
router.post("/", (req, res) => {
  let newUser = User(req.body);
  newUser.save()
    .then(user=>{
      delete user.password;
      res.json(user);
    })
    .catch(err=>{
      res.status(500).send("Sorry. Something Broke.");
    })
});

module.exports = router;