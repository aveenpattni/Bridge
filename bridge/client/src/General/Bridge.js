import React, { Component } from 'react'
import Login from './Login';
import Footer from '../Footer';

export default class Bridge extends Component {
  render() {
    return (
      <div className="bridge">
        <img src="./Assets/Images/suit.jpeg"  alt="hero"/>
        <Login />
        <Footer />
      </div>
    )
  }
}
