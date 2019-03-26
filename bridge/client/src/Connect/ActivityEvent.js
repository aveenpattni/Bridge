import React, { Component } from 'react'
import Moment from 'moment';

class ActivityEvent extends Component {
  render() {
    let pic='';
    if(this.props.event.type==="connection"){
      pic = "/Assets/Icons/add.svg"
    } else{
      pic = "/Assets/Icons/remove.svg"
    }
    return (
      <div className="AE">
        <div className="AE__card">
          <h5>{Moment(this.props.event.dateCreated).format('lll')}</h5>
          <p>{this.props.event.body}</p>
        </div>
        <img src={pic} alt="Activity Type"/>
      </div>
    )
  }
}

export default ActivityEvent;