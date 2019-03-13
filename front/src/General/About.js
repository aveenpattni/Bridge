import React, { Component } from 'react'
import NavBar from './NavBar';
import Footer from '../Footer';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        {/* <NavBar page="about"/> */}
        <div className="about__title">
          <h1>About</h1>
        </div>
        <div className="about__story">
          <h3>Our Story</h3>
          <p>
            Often young students don’t know how or are too scared to make initial 
            steps in networking. As well, they might not know who to network with 
            based on what their career aspirations are. Networking is a tricky skill
            and sometimes can take years to get a hang of.
          </p>
          <p>
            <em>Bridge</em> is tackling the struggle that inexperienced individuals 
            have when trying to network. <em>Bridge</em> will connect students with 
            mentors with industry experience. These connections are strategically 
            made to best suit the students and mentors.
          </p>
          <p>
            <em>Bridge </em> also presents a unique opportunity for those that choose
            to become mentors. They have a chance to give back to the student community. 
            These industry leaders can share their stories and provide proper guidance
            and advice to foster the growth of their students.
          </p>
        </div>
        <div className="about__meet">
          <h3>Meet Our Team</h3>
          <div className="about__meet--card">
            <img src="./Assets/Images/aveen.jpg"/>
            <h5>Aveen Pattni</h5>
            <h6>Founder and CEO</h6>
          </div>
        </div>
        <div className="about__contact">
          <h3>Contact Us</h3>
          <div className="about__contact--card">
            <ul>
              <li>Phone: (647) 462-3312</li>
              <li>Email: <a href="mailto:avpattni@edu.uwaterloo.ca">avpattni@edu.uwaterloo.ca</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
