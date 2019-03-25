//Setting up required packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config(); //this line loads the .env into process.env
const socketio = require("socket.io");
const Message = require('./models/message');

//Initiating application
const app = express();
// app.use(express.static("./client/build"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Declaring global variables
const PORT = process.env.PORT || 8080;
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

//Instruct server to listen
const server = app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});

//Configuring socket
const io = socketio(server)
io.on('connection', (socket) => {
  socket.on('join', (id, err) => {
    socket.join(id)
    Message.find({ chatID: id })
      .then(messages => {
        io.to(id).emit('messages', messages)
      })
      .catch(err => console.log(err))
  })
  socket.on("newMsg", (data) => {
    let middle = data.chatID.length / 2
    let id1 = data.chatID.slice(0, middle);
    let id2 = data.chatID.slice(middle);
    id1 === data.sender ? data.receiver = id2 : data.receiver = id1
    let newMsg = new Message(data)
    newMsg.save()
      .then((data) => {
        io.to(data.chatID).emit("received", data)
      })
      .catch(err => console.log(err))
  })
  socket.on('disconnect', (id) => {
    socket.leave(id)
  })
})