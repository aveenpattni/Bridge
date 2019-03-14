import React, { Component } from 'react';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import NavBarPub from './General/NavBar';
import Home from './General/Home';
import Features from './General/Features';
import Contact from './General/Contact';
import Bridge from './General/Bridge';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBarPub />
        <Switch>
          <Route path="/" exact render={() => {return <Redirect to='/connect' />}}/>
          <Route path="/home" render={() => {return <Home />}}/>
          <Route path="/features" component={Features} />
          <Route path="/contact" component={Contact} />
          <Route path="/connect" component={Bridge} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
