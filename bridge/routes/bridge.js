const express = require('express');
const router = express.Router();
const User = require('../models/user');
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

router.get("/add/:email", async (req, res) => {
  let user = await User.findOne({
    email: req.params.email
  });
  let foundItems = await User.find({
    type: "student",
    email: {
      $nin: user.connections
    }
  });
  res.json(foundItems);
});

module.exports = router;