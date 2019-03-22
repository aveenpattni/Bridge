import React, { Component } from 'react'
import {withCookies} from 'react-cookie';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Profile from './Profile';
import Connections from './Connections';
import Conversation from './Conversation';
import Add from './Add';
import Activity from './Activity';
import Settings from './Settings';
import Landing from './Landing';
import Footer from '../Footer';

class Connect extends Component {
  state={
    savedToken: false
  }
  componentDidMount() {
    const token = this.props.cookies.get('jwt') || ''
    if (token) {
      const config = {
        headers: { authorization: token }
      }
      axios.get(`/connect/auth`, config)
        .then(res => {
          this.setState({
            savedToken: true
          });
        })
        .catch(err => {
          this.setState({
            savedToken: false
          });
          console.log(err);
          this.props.history.push('/login');
        });
    } else {
      this.props.history.push('/login');
    }
  }
  render() {
    if(!this.state.savedToken){
      return (
        <div>
          <h1>Page</h1>
          <h1>Loading...</h1>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      )
    }
    return (
      <div className="connect">
        <Switch>
          <Route path="/connect" exact render={() => {return <Landing user={this.props.user} /> }} />
          <Route path="/connect/profile" render={() => {return <Profile user={this.props.user}/>}}/>
          <Route path="/connect/connections/:chatID" render={(props) => {return <Conversation {...props} user={this.props.user}/>}}/>
          <Route path="/connect/connections" render={() => {return <Connections user={this.props.user}/>}}/>
          <Route path="/connect/add" render={() => {return <Add user={this.props.user} /> }} />
          <Route path="/connect/activity" render={() => {return <Activity user={this.props.user} /> }} />
          <Route path="/connect/settings" render={() => {return <Settings user={this.props.user}/>}}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withCookies(Connect);