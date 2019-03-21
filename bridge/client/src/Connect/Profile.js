import React, { Component } from 'react'
import Moment from 'moment';

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile__pic">
          <img src={this.props.user.imageURL} alt="Profile Picture" />
        </div>
        <div className="profile__name">
          <h1>{this.props.user.fname} {this.props.user.lname}</h1>
        </div>
        <div className="profile__email profileBlock">
            <h4>Email: </h4>
            <p>{this.props.user.email}</p>
          </div>
        <div className="profile__bio profileBlock">
          <h4>Bio: </h4>
          <p>{this.props.user.bio}</p>
        </div>
        <div className="profile__memberType profileBlock">
          <h4>Type: </h4>
          <p>{this.props.user.type.charAt(0).toUpperCase() +
            this.props.user.type.slice(1)}</p>
        </div>
        <div className="profile__memberSince profileBlock">
          <h4>Member Since: </h4>
          <p>{Moment(this.props.user.dateCreated).format('LL')}</p>
        </div>
        <div className="profile__industry profileBlock">
          <h4>Industry: </h4>
          <p>{this.props.user.industry}</p>
        </div>
        <div className="profile__education profileBlock">
          <h4>Education: </h4>
          <p>{this.props.user.education}</p>
        </div>
        <div className="profile__status profileBlock">
          <h4>Status: </h4>
          <p>{this.props.user.currentPosition}</p>
        </div>
        <div className="profile__company profileBlock">
          <h4>School: </h4>
          <p>{this.props.user.school.charAt(0).toUpperCase() +
            this.props.user.school.slice(1)}</p>
        </div>
        <div className="profile__skills profileBlock">
          <h4>Skills: </h4>
          <p>{this.props.user.skills.map(skill => {
            return skill.charAt(0).toUpperCase() + skill.slice(1) + ", "
          })}</p>
        </div>
        <div className="profile__interests profileBlock">
          <h4>Interests: </h4>
          <p>{this.props.user.interests.map(interest => {
            return interest.charAt(0).toUpperCase() + interest.slice(1) + ", "
          })}</p>
        </div>
        <div className="profile__birthday profileBlock">
          <h4>Birthday: </h4>
          <p>{Moment(this.props.user.birthday).format('LL')}</p>
        </div>
        <div className="profile__address profileBlock">
          <h4>Address: </h4>
          <p>
            {this.props.user.location.address}<br/>
            {this.props.user.location.postal}<br/>
            {this.props.user.location.city}<br/>
            {this.props.user.location.state}
          </p>
        </div>
      </div>
    )
  }
}
