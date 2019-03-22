import React, { Component } from 'react'
import {withCookies} from 'react-cookie';
import axios from 'axios';
import ActivityEvent from './ActivityEvent';

class Activity extends Component {
  state={
    savedToken: false,
    activityList: []
  }
  componentDidMount() {
    const token = this.props.cookies.get('jwt') || ''
    if (token) {
      const config = {
        headers: { authorization: token }
      }
      axios.get(`http://localhost:8080/connect/auth`, config)
        .then(res => {
          this.setState({
            savedToken: true
          });
        })
        .catch(err => {
          this.setState({
            savedToken: false
          });
          console.log(err);
          this.props.history.push('/login');
        });
      axios.get(`http://localhost:8080/connect/activity/${this.props.user.email}`, config)
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
    return (
      <div className="activity">
        <h1>Activity</h1>
        {this.state.activityList.map(item=>{
          return <ActivityEvent key={item.email} event={item}/>
        })}
      </div>
    )
  }
}

export default withCookies(Activity);