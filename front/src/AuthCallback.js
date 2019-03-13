import React, { Component } from 'react'
import auth from './Auth';
import Logout from './Connect/Logout';

export default class AuthCallback extends Component {
  componentDidMount(){
    //This fn takes the accessToken out of the URL and puts it in localStorage
    //This is the token we need to access the backend
    auth.handleAuthentication();
  }
  render() {
    return (
      <div className="authcallback">
        <h2>Loading...</h2>
        <Logout />
      </div>
    )
  }
}
