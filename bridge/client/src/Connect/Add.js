import React, { Component } from 'react'
import {withCookies} from 'react-cookie'
import axios from 'axios';
import AddUser from './AddUser';

class Add extends Component {
  state={
    newList: []
  }
  componentDidMount() {
    this.props.authenticate();
    const token = this.props.cookies.get('jwt') || ''
    if (token) {
      const config = {
        headers: { authorization: token }
      }
      axios.get(`/connect/addlist/${this.props.user.email}`, config)
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
  acceptMatch = (newEmail) => {
    const token = this.props.cookies.get('jwt') || ''
    if (token) {
      const config = {
        headers: { authorization: token }
      }
      axios.put(`/connect/adduser/${this.props.user.email}`,
      {
        mentor: this.props.user.email,
        student: newEmail
      }, config)
        .then(res=>{
          this.setState({
            newList: this.state.newList.filter(item=>{
              return item.email !== newEmail
            })
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
          return <AddUser key={item.email} user={item} match={this.acceptMatch}/>
        })}
      </div>
    )
  }
}

export default withCookies(Add);