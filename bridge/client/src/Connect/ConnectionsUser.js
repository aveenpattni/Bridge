import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class ConnectionsUser extends Component {
  deleteConnection = e => {
    e.preventDefault();
    this.props.del(this.props.rec.email);
  }
  render() {
    let chatid = [this.props.user._id, this.props.rec._id].sort().join("");
    return (
      <div className="CU">
        <div className="CU__card">
          <Link to={`/connect/connections/${chatid}`}>
            <h2>{this.props.rec.fname} {this.props.rec.lname}</h2>
          </Link>
          <button onClick={this.deleteConnection}>
            <img src="/Assets/Icons/delete.svg"  alt="Del"/>
          </button>
        </div>
      </div>
    )
  }
}

export default ConnectionsUser;