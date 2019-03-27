import React, { Component } from 'react'
import {Route, Link, Switch, withRouter} from 'react-router-dom';
import Account from './Account';
import Invite from './Invite';
import Notif from './Notif';
import axios from 'axios';

class Settings extends Component {
  componentDidMount(){
    this.props.authenticate();
  }
  accountUpdate = (update) => {
    const token = localStorage.getItem("jwt") || '';
    if (token) {
      const config = {
        headers: { authorization: token }
      }
      axios.put(`/connect/settings/account/${this.props.user.email}`, update, config)
        .then(res => {
          this.props.history.push('/connect/settings');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.props.history.push('/login');
    }
  }
  render() {
    return (
      <div className="settings">
        <Switch>
          <Route path="/connect/settings/account" render={() => {return <Account user={this.props.user} update={this.accountUpdate}/>}}/>
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

export default withRouter(Settings);