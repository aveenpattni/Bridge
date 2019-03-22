import React, { Component } from 'react'
import ioClient from 'socket.io-client';

let socket = ioClient.connect('http://localhost:8080');

class Conversation extends Component {
  state = {
    message: "",
    messageList: []
  }
  componentDidMount() {
    let id = this.props.match.params.chatID;
    socket.emit('join', id)
    // All messages
    socket.on('messages', (data) => {
      console.log(data);
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
          <h1>Temp</h1>
        </div>
        <div className="conversation__chat">
          {
            !this.state.messageList ?
              <h3>Start a conversation!</h3> :
              this.state.messageList.map(msg => {
                return <p>{msg.body}</p>
              })
          }
        </div>
        <div className="conversation__post">
          <form onSubmit={this.msgSubmit}>
            <input type="text" onChange={this.msgChange} value={this.state.message}
              placeholder="Send a message" name="msgInput" required />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Conversation;