import React, { Component } from 'react'
import Moment from 'moment';

class ActivityEvent extends Component {
  render() {
    return (
      <div className="AE">
        <div className="AE__card">
          <h5>{Moment(this.props.event.dateCreated).format('lll')}</h5>
          <p>{this.props.event.body}</p>
        </div>
      </div>
    )
  }
}

export default ActivityEvent;