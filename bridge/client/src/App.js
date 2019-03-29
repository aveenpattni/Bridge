import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBarPub from './General/NavBar';
import About from './General/About';
import Features from './General/Features';
import Contact from './General/Contact';
import Bridge from './General/Bridge';
import Connect from './Connect/Connect'
import NavBar from './Connect/NavBar';
import axios from 'axios';

class App extends Component {
  state = {
    user: {},
    isLoggedIn: false,
    loginFail: false
  }
  componentDidMount() {
    console.log("Created by Aveen Pattni");
    this.authenticate();
  }
  authenticate = () => {
    const token = localStorage.getItem("jwt") || '';
    if (token) {
      const config = {
        headers: { authorization: token }
      }
      axios.get(`/connect/auth`, config)
        .then(res => {
          this.setState({
            isLoggedIn: true,
            user: res.data
          });
        })
        .catch(err => {
          this.setState({
            isLoggedIn: false,
            loginFail: false
          });
          console.log(err);
          this.props.history.push('/login');
        });
    } else {
      this.props.history.push('/login');
    }
  }
  sendLogin = e => {
    e.preventDefault();
    const credentials = {
      email: e.target.loginEmail.value,
      password: e.target.loginPassword.value
    }
    const config = {
      method: "post",
      data: credentials,
      url: '/login',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios(config)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.setState({
          user: res.data.user,
          isLoggedIn: true,
          loginFail: false
        });
        this.props.history.push('/connect')
      }).catch(err => {
        this.setState({
          loginFail: true
        });
        localStorage.removeItem("jwt");
      })
    e.target.loginPassword.value = "";
  }
  logout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      user: {},
      isLoggedIn: false
    });
    this.props.history.push('/login');
  }
  logoutClick = e => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    this.setState({
      user: {},
      isLoggedIn: false
    });
    this.props.history.push('/login');
  }
  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div className="app">
          <NavBarPub />
          <Switch>
            <Route path="/" exact render={() => { return <Redirect to='/login' /> }} />
            <Route path="/about" render={() => { return <About /> }} />
            <Route path="/features" component={Features} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" render={(props) => { return <Bridge sendLogin={this.sendLogin} {...props} fail={this.state.loginFail} /> }} />
            <Route path="/signup" render={(props) => { return <Bridge sendLogin={this.sendLogin} {...props} /> }} />
            <Route path="/" render={() => { return <Redirect to="/login" /> }} />
          </Switch>
        </div>
      )
    } else {
      return (
        <div className="app">
          <NavBar user={this.state.user} logout={this.logoutClick} />
          <Switch>
            <Route path="/connect" render={(props) => {
              return <Connect
                {...props}
                user={this.state.user}
                logoutClick={this.logoutClick}
                logout={this.logout}
                authenticate={this.authenticate}
              />
            }} />
            <Route path="/" render={() => { return <Redirect to='/connect' /> }} />
          </Switch>
        </div>
      )
    }
  }
}

export default withRouter(App);