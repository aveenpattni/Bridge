import React, { Component } from 'react'

export default class Account extends Component {
  constructor() {
    super();
    
    this.updateForm = React.createRef();
  }
  accountUpdate = (e) =>{
    e.preventDefault();
    let update = {
      imageURL: e.target.accountImage.value || this.props.user.imageURL,
      fname: e.target.accountFName.value || this.props.user.fname,
      lname: e.target.accountLName.value || this.props.user.lname,
      bio: e.target.accountBio.value || this.props.user.bio
    }
    this.props.update(update);
    
  }
  render() {
    return (
      <div className="account">
        <div className="settings__title">
          <h1>Settings - Account</h1>
        </div>
        <form ref={this.updateForm} onSubmit={this.accountUpdate}>
          <div className="accountForm">
            <div className="accountForm__pic">
              <img src={this.props.user.imageURL} alt="Profile" />
            </div>
            <div className="accountForm__imageURL accountFormBlock">
              <h3>Image URL:</h3>
              <input type="text" name="accountImage" placeholder={this.props.user.imageURL} />
            </div>
            <div className="accountForm__name accountFormBlock">
              <h3>Name:</h3>
              <div>
                <input type="text" name="accountFName" placeholder={this.props.user.fname} />
                <input type="text" name="accountLName" placeholder={this.props.user.lname} />
              </div>
            </div>
            <div className="accountForm__email accountFormBlock">
              <h4>Email: </h4>
              <p>{this.props.user.email}</p>
            </div>
            <div className="accountForm__bio accountFormBlock">
              <h4>Bio: </h4>
              <textarea type="text" name="accountBio" placeholder={this.props.user.bio} />
            </div>
            <div className="accountForm__member accountFormBlock">
              <h4>Member Type: </h4>
              <p>{this.props.user.type.charAt(0).toUpperCase() +
              this.props.user.type.slice(1)}</p>
            </div>
          <button type="submit">Update</button>
          </div>
        </form>
      </div>
    )
  }
}
