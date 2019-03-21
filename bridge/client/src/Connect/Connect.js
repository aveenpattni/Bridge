import React, { Component } from 'react'
import {withCookies} from 'react-cookie';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Profile from './Profile';
import Connections from './Connections';
import Settings from './Settings';
import Footer from '../Footer';

class Connect extends Component {
  state={
    name: '',
    savedToken: false,
    user: this.props.user,
    fullUser: {}
  }
  componentDidMount() {
    const token = this.props.cookies.get('jwt') || ''
    if (token) {
      const config = {
        headers: { authorization: token }
      }
      axios.get(`http://localhost:8080/connect/auth`, config)
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
  componentDidUpdate() {
    const token = this.props.cookies.get('jwt') || ''
    if (token) {
      const config = {
        headers: { authorization: token }
      }
      axios.get(`http://localhost:8080/connect/user/${this.state.user.email}`, config)
        .then(res => {
          if(res.data.fname !== this.state.name){
            this.setState({
              fullUser: res.data,
              name: res.data.fname,
              savedToken: true
            });
            console.log("updated");
          }
        })
        .catch(err => {
          console.log(err.response.data);
        });
    } else {
      this.props.logout();
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
          <Route path="/connect/profile" render={() => {return <Profile user={this.state.fullUser}/>}}/>
          <Route path="/connect/connections" render={() => {return <Connections user={this.state.fullUser}/>}}/>
          <Route path="/connect/settings" render={() => {return <Settings user={this.state.fullUser}/>}}/>
        </Switch>
        <button onClick={this.props.logoutClick}>Logout</button>
        <Footer />
      </div>
    )
  }
}

export default withCookies(Connect);