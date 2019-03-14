import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <div className="menuPublic">
        <h1 className="menuPublic__title" onClick={this.props.toggle}>Menu</h1>
        <ul className="menuPublic__list" onClick={this.props.toggle}>
          <Link to="/home"><li>Home</li></Link>
          <Link to="/features"><li>Features</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/bridge"><li>Connect</li></Link>
        </ul>
      </div>
    )
  }
}
