import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu';

export default class NavBar extends Component {
  state={
    menuVisible: false
  }
  toggleMenu = (e) => {
    e.preventDefault();
    if(this.state.menuVisible){
      this.setState({
        menuVisible: !this.state.menuVisible
      });
    } else{
      this.setState({
        menuVisible: !this.state.menuVisible
      });
    }
  }
  render() {
    return (
      <nav className="navbarPublic">
        {this.state.menuVisible ? <Menu toggle={this.toggleMenu}/> : <></>}      
        <div className="navbarPublic__settings">
          <Link to="/login"><img src="./Assets/login.svg"  alt="login"/></Link>
        </div>
        <div className="navbarPublic__logo">
          <Link to="/about" onClick={window.scrollTo(0, 0)}><img src="./Assets/logo.png"  alt="logo"/></Link>
        </div>
        <div className="navbarPublic__menu" onClick={this.toggleMenu}>
          <img src="./Assets/menu.svg"  alt="menu"/>
        </div>
      </nav>
    )
  }
}
