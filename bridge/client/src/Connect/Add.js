import React, { Component } from 'react'
import {withCookies} from 'react-cookie'
import axios from 'axios';

class Add extends Component {
  state={
    savedToken: false,
    newList: []
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
      axios.get(`http://localhost:8080/connect/add/${this.props.user.email}`, config)
        .then(res=>{
          this.setState({
            newList: res.data
          });
        })
        .catch(err=>{
          console.log(err);
        });
    } else {
      this.props.history.push('/login');
    }
  }
  render() {
    if(!this.state.newList || this.state.newList.length === 0){
      return(
        <div className="noadd">
          <h3>No new connections available</h3>
        </div>
      )
    }
    return (
      <div className="add">
        {this.state.newList.map(item=>{
          return <h4>{item.email}</h4>
        })}
      </div>
    )
  }
}

export default withCookies(Add);