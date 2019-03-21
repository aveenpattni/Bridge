const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Token = require('../Utilities/token');

//Authenticate login
router.post("/", async (req, res) => {
  const {email, password} = req.body;
  //If there are any fields missing, send back 404 error
  if (!req.body || !email || !password) {
    res.status(400).json({
      message: `You need to have a username and password in your login.`
    });
  }
  //Search for user in database
  var foundUser = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });
  //If username/password match not found, send back a 401
  if(!foundUser){
    res.status(401).json({
      message: `This username/password is invalid.`
  });
  //If user is found, send back a jwt 
  } else{
    foundUser = foundUser.toObject();
    delete foundUser.password;
    res.status(202).json({
      user: foundUser,
      token: Token.create(foundUser, 600)
    })
  }
});

module.exports = router;