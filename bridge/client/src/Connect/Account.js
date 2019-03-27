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
      bio: e.target.accountBio.value || this.props.user.bio,
      industry: e.target.accountIndustry.value || this.props.user.industry,
      skills: e.target.accountSkills.value.split(" ") || this.props.user.skills,
      interests: e.target.accountInterests.value.split(" ") || this.props.user.interests,
      currentPosition: e.target.accountPosition.value || this.props.user.currentPosition,
      yearsExperience: e.target.accountExp.value || this.props.user.yearsExperience
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
            <label className="accountForm__industry select">
              <h4>Industry:</h4>
              <select name="accountIndustry" required>
                <option value="Accounting">Accounting</option>
                <option value="Aerospace">Aerospace</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Automotive">Automotive</option>
                <option value="Banks">Banks</option>
                <option value="Bars">Bars</option>
                <option value="Broadcasting">Broadcasting</option>
                <option value="Building">Building</option>
                <option value="Business">Business</option>
                <option value="Clothing">Clothing</option>
                <option value="College">College</option>
                <option value="Computer Hardware">Computer Hardware</option>
                <option value="Computer Software">Computer Software</option>
                <option value="Construction">Construction</option>
                <option value="Defense">Defense</option>
                <option value="Dental">Dental</option>
                <option value="Education">Education</option>
                <option value="Electronics">Electronics</option>
                <option value="Energy">Energy</option>
                <option value="Environment">Environment</option>
                <option value="Farming">Farming</option>
                <option value="Finance">Finance</option>
                <option value="Food">Food</option>
                <option value="Government">Government</option>
                <option value="Health">Health</option>
                <option value="Hospital">Hospital</option>
                <option value="Hotel">Hotel</option>
                <option value="Human Rights">Human Rights</option>
                <option value="Industrial">Industrial</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Insurance">Insurance</option>
                <option value="Labor">Labor</option>
                <option value="Law">Law</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Marketing">Marketing</option>
                <option value="Medicine">Medicine</option>
                <option value="Mining">Mining</option>
                <option value="Music">Music</option>
                <option value="Non-Profit">Non-Profit</option>
                <option value="Nutrition">Nutrition</option>
                <option value="Other">Other</option>
                <option value="Pharmaceuticals">Pharmaceuticals</option>
                <option value="Police">Police</option>
                <option value="Radio">Radio</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Retired">Retired</option>
                <option value="Securities">Securities</option>
                <option value="Software Development">Software Development</option>
                <option value="Sports">Sports</option>
                <option value="Telecom">Telecom</option>
                <option value="Transportation">Transportation</option>
                <option value="Trucking">Trucking</option>
                <option value="TV">TV</option>
                <option value="Venture Capital">Venture Capital</option>
                <option value="Waste Management">Waste Management</option>
              </select>
            </label>
            <div className="accountForm__bio accountFormBlock">
              <h4>Skills: (Separate by space)</h4>
              <textarea type="text" name="accountSkills"
                        placeholder={this.props.user.skills.map(skill => {
                          return skill.charAt(0).toUpperCase() + skill.slice(1) + " "
                        })} />
            </div>
            <div className="accountForm__bio accountFormBlock">
              <h4>Interests: (Separate by space)</h4>
              <textarea type="text" name="accountInterests"
                        placeholder={this.props.user.interests.map(interest => {
                          return interest.charAt(0).toUpperCase() + interest.slice(1) + " "
                        })} />
            </div>
            <div className="accountForm__industry select">
              <h3>Current Position:</h3>
              <select name="accountPosition" >
                <option value="Employed">Employed</option>
                <option value="Unemployed">Unmployed</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <div className="accountForm__imageURL accountFormBlock">
              <h3>Years Experience:</h3>
              <input type="text" name="accountExp" placeholder={this.props.user.yearsExperience} />
            </div>
          <button type="submit">Update</button>
          </div>
        </form>
      </div>
    )
  }
}
