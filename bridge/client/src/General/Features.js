import React, { Component } from 'react'
import NavBar from './NavBar';
import Footer from '../Footer';

export default class Features extends Component {
  render() {
    return (
      <div className="features">
        {/* <NavBar page="features"/> */}
        <div className="features__title">
          <h1>Key Features</h1>
        </div>
        <div className="features__list">
          <div className="features__easy">
            <h3>Easy to Connect</h3>
            <p>No long set ups. Simply create a <em>Bridge</em> profile with your current career information and let us do the rest!</p>
          </div>
          <div className="features__targeted">
            <h3>Targeted Connections</h3>
            <p><em>Bridge</em> is build on a foundation to provide quality connections. We will ensure that you are connected with the students/mentors that best fit your current situation.</p>
          </div>
          <div className="features__instant">
            <h3>Instant Messaging</h3>
            <p>Communicate instantly with your connections. <em>Bridge</em> offers an instant messaging portal for quick communication between connections.</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
