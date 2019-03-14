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
        <div className="navbarPublic__menu" onClick={this.toggleMenu}>
          <img src="./Assets/menu.svg" />
        </div>
        <div className="navbarPublic__logo">
          <Link to="/home" onClick={window.scrollTo(0, 0)}><img src="./Assets/logo.png" /></Link>
        </div>
        <div className="navbarPublic__settings">
          <Link to="/bridge"><img src="./Assets/login.svg"/></Link>
        </div>
      </nav>
    )
  }
}
