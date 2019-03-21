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
      <nav className="navbar">
        {this.state.menuVisible ? <Menu toggle={this.toggleMenu} user={this.props.user}/> : <></>}      
        <div className="navbar__menu" onClick={this.toggleMenu}>
          <img src="./Assets/menu.svg"  alt="menu"/>
        </div>
        <div className="navbar__logo">
          <Link to="/connect/profile" onClick={window.scrollTo(0, 0)}><img src="./Assets/logo.png"  alt="logo"/></Link>
        </div>
        <div className="navbar__settings">
          <button onClick={this.props.logout}><img src="./Assets/settings.svg"  alt="login"/></button>
        </div>
      </nav>
    )
  }
}
