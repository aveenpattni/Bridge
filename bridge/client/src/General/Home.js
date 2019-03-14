import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Footer from '../Footer';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        {/* <NavBar page="home"/> */}
        <div className="home__slogan">
          <h2>Creating Connections</h2>
          <h2>Creating Networks</h2>
        </div>
        <div className="home__hero">
          <img src='./Assets/Images/handshake2.jpg' alt="Hero" />
        </div>
        <section className="home__what">
          <p><em>Bridge</em> is professional networking tool designed to match students to mentors based on their career goals and aspirations.</p>
          <h3>Why Bridge?</h3>
          <h4>Students</h4>
          <ul>
            <li>Connect with the right people</li>
            <li>Receive quality advice from industry experts</li>
            <li>Enhance your network</li>
          </ul>
          <h4>Mentors</h4>
          <ul>
            <li>Give back to the community</li>
            <li>Foster growth in the future generation</li>
            <li>Share your stories</li>
          </ul>
        </section>
        <div className="home__network">
          <img src='./Assets/Images/network.jpg' alt="Hero" />
        </div>
        <div className="home__how">
          <p>Bridge uses advanced network theory to ensure that your connections are designed to make the most impact.</p>
          <Link to="/bridge"><button>Build your <em>Bridge</em></button></Link>
        </div>
        <Footer />
      </div>
    )
  }
}
