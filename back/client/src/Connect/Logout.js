import React, { Component } from 'react'
import auth from '../Auth';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <h1>Click to Logout</h1>
        <button onClick={auth.logout}>Auth0 Logout</button>
      </div>
    )
  }
}
