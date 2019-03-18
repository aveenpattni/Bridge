import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
  constructor(){
    super();

    this.loginForm = React.createRef();
  }
  submitLogin = (e) => {
    e.preventDefault();
    const credentials = {
      email: e.target.loginEmail.value,
      password: e.target.loginPassword.value
    }
    const config = {
      method: "post",
      data: credentials,
      url: 'http://localhost:8080/login',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios(config).then(res=>console.log(res)).catch(err=>console.log(err));
    e.target.loginPassword.value = "";
  }
  render() {
    return (
      <div className="login">
        <form ref={this.loginForm} onSubmit={this.submitLogin}>
          <label className="login__email">
            <h2>Email:</h2>
            <input type="email" name="loginEmail" placeholder="Email" required/>
          </label>
          <label className="login__password">
            <h2>Password:</h2>
            <input type="password" name="loginPassword" placeholder="Password" required/>
          </label>
          <button className="login__loginbutton" type="submit">Login</button>
        </form>
        <div className="login__newUser">
          <Link to="/signup"><button>Sign up</button></Link>
        </div>
      </div>
    )
  }
}