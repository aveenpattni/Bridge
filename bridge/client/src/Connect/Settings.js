import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom';
import Account from './Account';
import Invite from './Invite';
import Notif from './Notif';


export default class Settings extends Component {
  componentDidMount(){
    this.props.authenticate();
  }
  render() {
    return (
      <div className="settings">
        <Switch>
          <Route path="/connect/settings/account" render={() => {return <Account user={this.props.user}/>}}/>
          <Route path="/connect/settings/invite" render={() => {return <Invite user={this.props.user}/>}}/>
          <Route path="/connect/settings/notifications" render={() => {return <Notif user={this.props.user}/>}}/>
          <Route path="/" render={()=>{
            return (
              <div className="settings__landing">
                <div className="settings__title">
                  <h1>Settings</h1>
                </div>
                <div className="settings__menu">
                  <Link to="/connect/settings/account">
                    <li><h3>Account</h3></li>
                  </Link>
                  <Link to="/connect/settings/invite">
                    <li><h3>Invite</h3></li>
                  </Link>
                  <Link to="/connect/settings/notifications">
                    <li><h3>Notifications</h3></li>
                  </Link>
                </div>
              </div>
            )
          }} />
        </Switch>
        
      </div>
    )
  }
}
