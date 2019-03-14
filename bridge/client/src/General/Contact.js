import React, { Component } from 'react'
import Footer from '../Footer';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact__title">
          <h1>Contact</h1>
        </div>
        <div className="contact__contact">
          <h3>Contact Us</h3>
          <div className="contact__contact--card">
            <ul>
              <li>Phone: (647) 462-3312</li>
              <li>Email: <a href="mailto:avpattni@edu.uwaterloo.ca">avpattni@edu.uwaterloo.ca</a></li>
            </ul>
          </div>
        </div>
        <div className="contact__story">
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
        <div className="contact__meet">
          <h3>Meet Our Team</h3>
          <div className="contact__meet--card">
            <img src="./Assets/Images/aveen.jpg"  alt="Aveen Pattni"/>
            <h5>Aveen Pattni</h5>
            <h6>Founder and CEO</h6>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
