import React, { Component } from 'react';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import NavBarPub from './General/NavBar';
import About from './General/About';
import Features from './General/Features';
import Contact from './General/Contact';
import Bridge from './General/Bridge';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBarPub />
        <Switch>
          <Route path="/" exact render={() => {return <Redirect to='/login' />}}/>
          <Route path="/about" render={() => {return <About />}}/>
          <Route path="/features" component={Features} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Bridge} />
          <Route path="/signup" component={Bridge} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
