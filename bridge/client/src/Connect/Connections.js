import React, { Component } from 'react'
import {withCookies} from 'react-cookie';
import axios from 'axios';

class Connections extends Component {
  state={
    savedToken: false,
    connectionList: []
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
      axios.get(`http://localhost:8080/connect/connections/${this.props.user.email}`, config)
        .then(res=>{
          this.setState({
            connectionList: res.data
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
    if(!this.state.connectionList){
      return(
        <div className="noconnections">
          <h3>You have no connections</h3>
        </div>
      )
    }
    return (
      <div className="connections">
        {this.state.connectionList.map(item=>{
          return <h4>{item.email}</h4>
        })}
      </div>
    )
  }
}

export default withCookies(Connections);