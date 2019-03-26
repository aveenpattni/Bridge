import React, { Component } from 'react'
import Login from './Login';
import Signup from './Signup';
import Footer from '../Footer';

export default class Bridge extends Component {
  render() {
    return (
      <div className="bridge">
        {this.props.match.path === "/signup" ?
          <></> :
          <img className="bridge__back" src="./Assets/Images/suit.jpeg"  alt="hero"/>}
        {this.props.match.path === "/signup" ? <Signup {...this.props} sendLogin={this.props.sendLogin}/> : <Login sendLogin={this.props.sendLogin} fail={this.props.fail}/>}
        <Footer />
      </div>
    )
  }
}
