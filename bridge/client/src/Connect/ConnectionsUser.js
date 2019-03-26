import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Moment from 'moment';

class ConnectionsUser extends Component {
  state={
    seeMore:false
  }
  deleteConnection = e => {
    e.preventDefault();
    this.props.del(this.props.rec.email);
  }
  seeToggle = e => {
    e.preventDefault();
    this.setState({
      seeMore: !this.state.seeMore
    });
  }
  render() {
    let chatid = [this.props.user._id, this.props.rec._id].sort().join("");
    return (
      <div className="CU">
        <div className="profile connectionProfile">
          <div className="CU__card">
            <Link to={`/connect/connections/${chatid}`}>
              <h3>Conversation</h3>
            </Link>
            <button onClick={this.deleteConnection}>
              <h4>Delete</h4>
              <img src="/Assets/Icons/delete.svg"  alt="Del"/>
            </button>
          </div>
          <div className="profile__pic">
            <img src={this.props.rec.imageURL} alt="Profile" />
          </div>
          <div className="profile__name">
            <h1>{this.props.rec.fname} {this.props.rec.lname}</h1>
          </div>
          <div className="CU__seeMore">
            <button onClick={this.seeToggle}>
              <h3>{this.state.seeMore ? "Hide Info" : "See Info"}</h3>
            </button>
          </div>
          <div className={this.state.seeMore ? null : "seeLess"}>
            <div className="profile__email profileBlock">
                <h4>Email: </h4>
                <p>{this.props.rec.email}</p>
              </div>
            <div className="profile__bio profileBlock">
              <h4>Bio: </h4>
              <p>{this.props.rec.bio}</p>
            </div>
            <div className="profile__memberType profileBlock">
              <h4>Type: </h4>
              <p>{this.props.rec.type.charAt(0).toUpperCase() +
                this.props.rec.type.slice(1)}</p>
            </div>
            <div className="profile__memberSince profileBlock">
              <h4>Member Since: </h4>
              <p>{Moment(this.props.rec.dateCreated).format('LL')}</p>
            </div>
            <div className="profile__industry profileBlock">
              <h4>Industry: </h4>
              <p>{this.props.rec.industry}</p>
            </div>
            <div className="profile__company profileBlock">
              <h4>Company: </h4>
              <p>{this.props.rec.company.charAt(0).toUpperCase() +
                this.props.rec.company.slice(1)}</p>
            </div>
            <div className="profile__education profileBlock">
              <h4>Education: </h4>
              <p>{this.props.rec.education}</p>
            </div>
            <div className="profile__status profileBlock">
              <h4>Status: </h4>
              <p>{this.props.rec.currentPosition}</p>
            </div>
            <div className="profile__company profileBlock">
              <h4>School: </h4>
              <p>{this.props.rec.school.charAt(0).toUpperCase() +
                this.props.rec.school.slice(1)}</p>
            </div>
            <div className="profile__skills profileBlock">
              <h4>Skills: </h4>
              <p>{this.props.rec.skills.map(skill => {
                return skill.charAt(0).toUpperCase() + skill.slice(1) + ", "
              })}</p>
            </div>
            <div className="profile__interests profileBlock">
              <h4>Interests: </h4>
              <p>{this.props.rec.interests.map(interest => {
                return interest.charAt(0).toUpperCase() + interest.slice(1) + ", "
              })}</p>
            </div>
            <div className="profile__address profileBlock">
              <h4>City: </h4>
              <p>
                {this.props.rec.location.city.charAt(0).toUpperCase() +
                this.props.rec.location.city.slice(1)}
              </p>
            </div>
          </div> 
        </div>
      </div>
    )
  }
}

export default ConnectionsUser;