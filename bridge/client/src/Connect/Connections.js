import React, { Component } from 'react'
import axios from 'axios';
import ConnectionsUser from './ConnectionsUser';

class Connections extends Component {
  state = {
    connectionList: []
  }
  componentDidMount() {
    this.props.authenticate();
    const token = localStorage.getItem("jwt") || '';
    if (token) {
      const config = {
        headers: { authorization: token }
      }
      axios.get(`/connect/connections/${this.props.user.email}`, config)
        .then(res => {
          this.setState({
            connectionList: res.data
          })
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  deleteConnection = userEmail => {
    const token = localStorage.getItem("jwt") || '';
    if (token) {
      const config = {
        headers: { authorization: token }
      }
      axios.put(`/connect/delete/${this.props.user.email}`,
        {
          mentor: this.props.user.email,
          student: userEmail
        }, config)
        .then(res => {
          this.setState({
            connectionList: this.state.connectionList.filter(item => {
              return item.email !== userEmail
            })
          })
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.props.history.push('/login');
    }
  }
  render() {
    if (!this.state.connectionList || this.state.connectionList.length < 1) {
      return (
        <div className="noconnections">
          <h3>You have no connections</h3>
        </div>
      )
    }
    return (
      <div className="connections">
        {this.state.connectionList.map(item => {
          return <ConnectionsUser key={item._id} user={this.props.user} rec={item} del={this.deleteConnection} />
        })}
      </div>
    )
  }
}

export default Connections;