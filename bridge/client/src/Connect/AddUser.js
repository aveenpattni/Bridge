import React, { Component } from 'react'
import Moment from 'moment';

class AddUser extends Component {
  submitMatch = (e) => {
    e.preventDefault();
    this.props.match(this.props.user.email);
  }
  render() {
    let scoreColor = ''
    if(this.props.user.score > 500){
      scoreColor = "adduser__high";
    } else if(this.props.user.score > 250){
      scoreColor = "adduser__mid"
    } else{
      scoreColor = "adduser__low"
    }
    return (
      <section className="adduser">
        <div className="adduser__card">
          <div className="adduser__header">
            <div className="adduser__display">
              <img src={this.props.user.imageURL} alt="Display" className={scoreColor}/>
            </div>
            <div className="adduser__person">
              <div className="adduser__name">
                <h1>{this.props.user.fname} {this.props.user.lname}</h1>
              </div>
              <div className="adduser__city">
                <h4>City: </h4>
                <p>{this.props.user.location.city.charAt(0).toUpperCase() +
                this.props.user.location.city.slice(1)}</p>
              </div>
              <div className="adduser__city">
                <h4>Match Score: </h4>
                <p>{Math.round(this.props.user.score)}</p>
              </div>
            </div>
          </div>
          <div className="adduser__email adduserBlock">
            <h4>Email: </h4>
            <p>{this.props.user.email}</p>
          </div>
          <div className="adduser__bio adduserBlock">
            <h4>Bio: </h4>
            <p>{this.props.user.bio}</p>
          </div>
          <div className="adduser__memberSince adduserBlock">
            <h4>Member Since: </h4>
            <p>{Moment(this.props.user.dateCreated).format('LL')}</p>
          </div>
          <div className="adduser__industry adduserBlock">
            <h4>Industry: </h4>
            <p>{this.props.user.industry}</p>
          </div><div className="adduser__company adduserBlock">
            <h4>Company: </h4>
            <p>{this.props.user.company.charAt(0).toUpperCase() +
              this.props.user.company.slice(1)}</p>
          </div>
          <div className="adduser__education adduserBlock">
            <h4>Education: </h4>
            <p>{this.props.user.education}</p>
          </div>
          <div className="adduser__status adduserBlock">
            <h4>Status: </h4>
            <p>{this.props.user.currentPosition}</p>
          </div>
          <div className="adduser__company adduserBlock">
            <h4>School: </h4>
            <p>{this.props.user.school.charAt(0).toUpperCase() +
              this.props.user.school.slice(1)}</p>
          </div>
          <div className="adduser__skills adduserBlock">
            <h4>Skills: </h4>
            <p>{this.props.user.skills.map(skill => {
              return skill.charAt(0).toUpperCase() + skill.slice(1) + ", "
            })}</p>
          </div>
          <div className="adduser__interests adduserBlock">
            <h4>Interests: </h4>
            <p>{this.props.user.interests.map(interest => {
              return interest.charAt(0).toUpperCase() + interest.slice(1) + ", "
            })}</p>
          </div>
          <button className="adduser__match" onClick={this.submitMatch}>Match</button>
        </div>
      </section>
    )
  }
}

export default AddUser;