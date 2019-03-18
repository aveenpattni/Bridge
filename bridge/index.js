//Setting up required packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Initiating application
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//Declaring global variables
const PORT = 8080;
const MONGOPORT = 27017;

//Connecting to database
mongoose.connect(`mongodb://localhost:${MONGOPORT}/BridgeDB`);
mongoose.connection.on("open", () => {
  console.log(`Connected to Mongoose on localhost:${MONGOPORT}`);
});

//Routes to organize HTTP requestes
app.use("/connect", require('./routes/bridge.js'));
app.use("/login", require('./routes/login.js'));
app.use("/signup", require('./routes/signup.js'));



app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});