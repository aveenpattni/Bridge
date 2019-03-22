import React, { Component } from 'react'
import {withCookies} from 'react-cookie';
import axios from 'axios';
import ConnectionsUser from './ConnectionsUser';

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
  deleteConnection = userEmail => {
    const token = this.props.cookies.get('jwt') || ''
    if (token) {
      const config = {
        headers: { authorization: token }
      }
      axios.put(`http://localhost:8080/connect/delete/${this.props.user.email}`,
      {
        mentor: this.props.user.email,
        student: userEmail
      }, config)
        .then(res=>{
          console.log(res.data);
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
          return <ConnectionsUser key={item.email} user={item} del={this.deleteConnection}/>
        })}
      </div>
    )
  }
}

export default withCookies(Connections);