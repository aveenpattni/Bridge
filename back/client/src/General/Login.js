import React, { Component } from 'react';
import auth from '../Auth';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <button onClick={auth.login}>Login/SignUp</button>
      </div>
    )
  }
}