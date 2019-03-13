import React, { Component } from 'react';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import NavBarPub from './General/NavBar';
import Menu from './General/Menu';
import Home from './General/Home';
import Features from './General/Features';
import About from './General/About';
import Bridge from './General/Bridge';
import AuthCallback from './AuthCallback';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBarPub />
        <Switch>
          <Route path="/" exact render={() => {return <Redirect to='/home' />}}/>
          <Route path="/home" render={() => {return <Home />}}/>
          <Route path="/features" component={Features} />
          <Route path="/about" component={About} />
          <Route path="/bridge" component={Bridge} />
          <Route path="/callback" component={AuthCallback} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
