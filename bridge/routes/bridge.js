const express = require('express');
const router = express.Router();

//Get personal user Profile
router.get("/profile", (req, res) => {
  res.send("yolo");
});

module.exports = router;