import React, { Component } from 'react'

export default class Invite extends Component {
  render() {
    return (
      <div className="invite">
        <div className="settings__title">
          <h1>Settings - Invite</h1>
        </div>
        <form>
          <label>
            <h4>Email:</h4>
            <input type="text" name="inviteFormEmail" className="invite__formVal"></input>
          </label>
          <label>
            <h4>Message:</h4>
            <textarea name="inviteFormEmail" className="invite__formVal">
            Join bridge to expand your network. 
            Connect with the right people to get the most value out of networking. 
            Build your network, build your bridge!
            </textarea>
          </label>
          <button type="submit"><h2>Send</h2></button>
        </form>
      </div>
    )
  }
}
