import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Menu from './Menu';

class NavBar extends Component {
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
        {this.state.menuVisible ? <Menu toggle={this.toggleMenu} user={this.props.user} logout={this.props.logout}/> : <></>}      
        <div className="navbar__back">
          <button onClick={this.props.history.goBack}><img src="./Assets/Icons/back.svg"  alt="back"/></button>
        </div>
        <div className="navbar__logo">
          <Link to="/connect" onClick={window.scrollTo(0, 0)}><img src="./Assets/logo.png"  alt="logo"/></Link>
        </div>
        <div className="navbar__menu" onClick={this.toggleMenu}>
          <img src="./Assets/menu.svg"  alt="menu"/>
        </div>
      </nav>
    )
  }
}

export default withRouter(NavBar);