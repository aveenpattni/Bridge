import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar__menu">
          <img src="./Assets/menu.svg" />
        </div>
        <div className="navbar__logo">
          <Link to="/home"><img src="./Assets/logo.png" /></Link>
        </div>
        <div className="navbar__settings">
          <Link to="/settings"><img src="./Assets/settings.svg"/></Link>
        </div>
      </nav>
    )
  }
}
