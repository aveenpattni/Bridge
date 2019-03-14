//Setting up required packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Initiating application
const app = express();
//Declaring global variables
const PORT = 8080;
const MONGOPORT = 27017;

//Connecting to database
mongoose.connect(`mongodb://localhost:${MONGOPORT}/BridgeDB`);
mongoose.connection.on("open", () => {
  console.log(`Connected to Mongoose on localhost:${MONGOPORT}`);
});

//Routes to organize HTTP requestes
app.use("/bridge", require('./routes/bridge.js'));


app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});