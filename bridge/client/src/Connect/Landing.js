import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

export default class Landing extends Component {
  render() {
    return (
      <Spring from={{ marginTop: -500 }} to={{ marginTop: 0 }}>
        { props => (
          <div className="landing">
            <Link to="/connect/profile" style={props}>
              <div className="landing__block"><h3>Profile</h3></div>
            </Link>
            <Link to="/connect/connections">
              <div className="landing__block"><h3>Network</h3></div>
            </Link>
            {this.props.user.type === "mentor" ? 
                <Link to="/connect/add">
                  <div className="landing__block"><h3>New</h3></div>
                </Link> 
                : <></>
              }
            <Link to="/connect/activity">
              <div className="landing__block"><h3>Activity</h3></div>
            </Link>
            <Link to="/connect/settings">
              <div className="landing__block"><h3>Settings</h3></div>
            </Link>
          </div>
        )}
      </Spring>
    )
  }
}
