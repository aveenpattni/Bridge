import React, { Component } from 'react'
import NavBar from './NavBar';
import Login from './Login';
import Footer from '../Footer';

export default class Bridge extends Component {
  render() {
    return (
      <div className="bridge">
        {/* <NavBar page="bridge"/> */}
        <div className="bridge__slogan">
          <h1>Build your <em>Bridge</em></h1>
        </div>
        <div className="bridge__hero">
          <img src="./Assets/Images/akshay.jpg" />
        </div>
        <Login />
        <Footer />
      </div>
    )
  }
}
