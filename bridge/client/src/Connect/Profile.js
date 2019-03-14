import React, { Component } from 'react'
import NavBar from './NavBar';

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <NavBar />
        <h1>Profile</h1>
      </div>
    )
  }
}
