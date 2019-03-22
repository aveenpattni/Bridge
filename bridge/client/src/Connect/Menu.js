import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h1 className="menu__title" onClick={this.props.toggle}>Menu</h1>
        <ul className="menu__list" onClick={this.props.toggle}>
          <Link to="/connect/profile"><li>Profile</li></Link>
          <Link to="/connect/connections"><li>Network</li></Link>
          {this.props.user.type === "mentor" ? 
            <Link to="/connect/add"><li>New</li></Link> :
            <></>
          }
          <Link to="/connect/activity"><li>Activity</li></Link>
          <Link to="/connect/settings"><li>Settings</li></Link>
        </ul>
      </div>
    )
  }
}
