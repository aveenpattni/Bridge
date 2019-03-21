import React, { Component } from 'react';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import {withCookies} from 'react-cookie';
import NavBarPub from './General/NavBar';
import About from './General/About';
import Features from './General/Features';
import Contact from './General/Contact';
import Bridge from './General/Bridge';
import Connect from './Connect/Connect'
import NavBar from './Connect/NavBar';
import axios from 'axios';

class App extends Component {
  state={
    user: {},
    isLoggedIn: false
  }
  //Use this with a user cookie to check if logged in
  // componentDidMount() {
  //   const token = this.props.cookies.get('jwt') || ''
  //   if (token) {
  //     const config = {
  //       headers: { authorization: token }
  //     }
  //     axios.get(`http://localhost:8080/connect/auth`, config)
  //       .then(res => {
  //         this.setState({
  //           savedToken: true
  //         });
  //       })
  //       .catch(err => {
  //         this.setState({
  //           savedToken: false
  //         });
  //         console.log(err);
  //       });
  //   } else {
  //     this.props.history.push('/login');
  //   }
  // }
  sendLogin = e => {
    e.preventDefault();
    const credentials = {
      email: e.target.loginEmail.value,
      password: e.target.loginPassword.value
    }
    const config = {
      method: "post",
      data: credentials,
      url: 'http://localhost:8080/login',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios(config)
      .then(res=>{
        this.props.cookies.set('jwt', res.data.token);
        this.setState({
          user: res.data.user,
          isLoggedIn: true
        });
        this.props.history.push('/connect')
      }).catch(err =>{
        window.alert(err.response.data.message);
      })
    e.target.loginPassword.value = "";
  }
  logout = () => {
    this.props.cookies.remove('jwt');
    this.setState({
      user:{},
      isLoggedIn: false
    });
    this.props.history.push('/login');
  }
  logoutClick = e => {
    e.preventDefault();
    this.props.cookies.remove('jwt');
    this.setState({
      user:{},
      isLoggedIn: false
    });
    this.props.history.push('/login');
  }
  render() {
    return (
      <div className="app">
        {this.state.isLoggedIn? <NavBar user={this.state.user} logout={this.logoutClick}/> : <NavBarPub /> }
        <Switch>
          <Route path="/" exact render={() => {return <Redirect to='/login' />}}/>
          <Route path="/about" render={() => {return <About />}}/>
          <Route path="/features" component={Features} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" render={(props) => {return <Bridge sendLogin={this.sendLogin} {...props}/>}}/>
          <Route path="/signup" render={(props) => {return <Bridge sendLogin={this.sendLogin} {...props}/>}}/>
          <Route path="/connect" render={(props) => {return <Connect 
                                                      {...props} 
                                                      user={this.state.user}
                                                      logoutClick={this.logoutClick}
                                                      logout={this.logout}
                                                      />}} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(withCookies(App));
