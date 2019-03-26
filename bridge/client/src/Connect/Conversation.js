import React, { Component } from 'react'
import ioClient from 'socket.io-client';
import axios from 'axios';

let socket = ioClient.connect('http://localhost:8080');

class Conversation extends Component {
  state = {
    message: "",
    messageList: [],
    receiver: {}
  }
  componentDidMount() {
    this.props.authenticate();
    this.getReceiver();
    let id = this.props.match.params.chatID;
    socket.emit('join', id)
    // All messages
    socket.on('messages', (data) => {
      this.setState({
        messageList: data
      })
    })
    // Recieve msg
    socket.on("received", (message) => {
      this.setState({
        messageList: [...this.state.messageList, message]
      })
    })
  }
  getReceiver = () =>{
    let middle = this.props.match.params.chatID.length / 2;
    let rec = this.props.match.params.chatID.slice(0, middle);
    let other = this.props.match.params.chatID.slice(middle);
    if (rec === this.props.user._id){
      rec = other;
    }
    const token = localStorage.getItem("jwt") || '';
    if (token) {
      const config = {
        headers: { authorization: token }
      }
      axios.get(`/connect/connections/receiver/${rec}`, config)
        .then(res=>{
          this.setState({
            receiver: res.data
          })
        })
        .catch(err=>{
          console.log(err);
        });
    } else {
      this.props.history.push('/login');
    }
  }
  msgSubmit = (e) => {
    e.preventDefault();
    this.setState({
      message: ""
    })
    socket.emit("newMsg", {
      body: this.state.message,
      chatID: this.props.match.params.chatID,
      sender: this.props.user._id
    })
  }
  msgChange = (e) => {
    e.preventDefault();
    this.setState({ message: e.target.value });
  }
  componentWillUnmount() {
    socket.emit('disconnect', this.props.match.params.chatID)
  }
  render() {
    if (!this.state.messageList) {
      return <h3>Start a conversation!</h3>
    }
    return (
      <div className="conversation">
        <div className="conversation__header">
          <img src={this.state.receiver.imageURL} alt={this.state.receiver.fname}/>
          <h2>{this.state.receiver.fname} {this.state.receiver.lname}</h2>
        </div>
        <div className="conversation__chat">
          {
            !this.state.messageList ?
              <h3>Start a conversation!</h3> :
              this.state.messageList.map(msg => {
                return (
                  <p key={msg._id} className={msg.sender === this.props.user._id ? "conversation__sent" : "conversation__rec"}>
                    {msg.body}
                  </p>
                )
              })
          }
        </div>
        <div className="conversation__post">
          <form onSubmit={this.msgSubmit}>
            <textarea type="text" onChange={this.msgChange} value={this.state.message}
              placeholder="Send a message" name="msgInput" required />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Conversation;