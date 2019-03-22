const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Create user profile
router.post("/", async (req, res) => {
  var newPass = await bcrypt.hash(req.body.password, saltRounds);
  let newUser = new User(req.body);
  newUser.password = newPass;
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