import React, { Component } from 'react'

class ConnectionsUser extends Component {
  deleteConnection = e => {
    e.preventDefault();
    this.props.del(this.props.user.email);
  }
  render() {
    return (
      <div className="CU">
        <div className="CU__card">
          <h2>{this.props.user.fname} {this.props.user.lname}</h2>
          <button onClick={this.deleteConnection}>
            <img src="./Assets/Icons/delete.svg" alt="del"/>
          </button>
        </div>
      </div>
    )
  }
}

export default ConnectionsUser;