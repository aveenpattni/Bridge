import React, { Component } from 'react'
import axios from 'axios';

class Connections extends Component {
  state={
    savedToken: false
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
        });
        
    } else {
      this.props.history.push('/login');
    }
  }
  render() {
    if(!this.props.user.connections || this.props.user.connections.length === 0){
      return(
        <div className="noconnections">
          <h3>You have no connections</h3>
        </div>
      )
    }
    return (
      <div className="connections">
        
      </div>
    )
  }
}

export default Connections;