import React, { Component } from 'react'
import axios from 'axios';
import ActivityEvent from './ActivityEvent';

class Activity extends Component {
  state={
    activityList: []
  }
  componentDidMount() {
    this.props.authenticate();
    const token = localStorage.getItem("jwt") || '';
    if (token) {
      const config = {
        headers: { authorization: token }
      }
      axios.get(`/connect/activity/${this.props.user.email}`, config)
        .then(res=>{
          this.setState({
            activityList: res.data
          })
        })
        .catch(err=>{
          console.log(err);
        });
    } else {
      this.props.history.push('/login');
    }
  }
  render() {
    if(!this.state.activityList || this.state.activityList.length === 0){
      return(
        <div className="noactivity">
          <h3>No new activity</h3>
        </div>
      )
    }
    return (
      <div className="activity">
        <h1>{this.props.user.fname}'s Activity</h1>
        {this.state.activityList.map(item=>{
          return <ActivityEvent key={item._id} event={item}/>
        })}
      </div>
    )
  }
}

export default Activity;