import React, { Component } from 'react'
import {withCookies} from 'react-cookie';
import {Switch, Route} from 'react-router-dom';
import Profile from './Profile';
import Connections from './Connections';
import Conversation from './Conversation';
import Add from './Add';
import Activity from './Activity';
import Settings from './Settings';
import Landing from './Landing';
import Footer from '../Footer';

class Connect extends Component {
  componentDidMount() {
    this.props.authenticate();
  }
  render() {
    return (
      <div className="connect">
        <Switch>
          <Route path="/connect" exact render={() => {return <Landing user={this.props.user} /> }} />
          <Route path="/connect/profile" render={() => {return <Profile 
                                                                  user={this.props.user}
                                                                  authenticate={this.props.authenticate}/>}}/>
          <Route path="/connect/connections/:chatID" render={(props) => {return <Conversation 
                                                                                  {...props} 
                                                                                  user={this.props.user}
                                                                                  authenticate={this.props.authenticate}/>}}/>
          <Route path="/connect/connections" render={() => {return <Connections
                                                                      user={this.props.user}
                                                                      authenticate={this.props.authenticate}/>}}/>
          <Route path="/connect/add" render={() => {return <Add
                                                              user={this.props.user}
                                                              authenticate={this.props.authenticate}/> }} />
          <Route path="/connect/activity" render={() => {return <Activity
                                                                  user={this.props.user}
                                                                  authenticate={this.props.authenticate}/> }} />
          <Route path="/connect/settings" render={() => {return <Settings 
                                                                  user={this.props.user}
                                                                  authenticate={this.props.authenticate}/>}}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}
//authenticate={this.props.authenticate}
export default withCookies(Connect);