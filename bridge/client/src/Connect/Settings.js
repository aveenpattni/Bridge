import React, { Component } from 'react'

export default class Settings extends Component {
  componentDidMount(){
    this.props.authenticate();
  }
  render() {
    return (
      <div className="settings">
        <h1>Settings</h1>
        
      </div>
    )
  }
}
