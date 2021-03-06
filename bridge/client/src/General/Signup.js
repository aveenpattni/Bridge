import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      isSignedUp: false
    }
    this.signupForm = React.createRef();
  }
  submitSignup = e => {
    e.preventDefault();
    const newUser = {
      type: e.target.signupType.value,
      fname: e.target.signupFName.value,
      lname: e.target.signupLName.value,
      email: e.target.signupEmail.value,
      password: e.target.signupPassword.value,
      birthday: e.target.signupBirthday.value,
      location: {
        address: e.target.signupAddress.value,
        postal: e.target.signupPostal.value,
        city: e.target.signupCity.value.toLowerCase(),
        state: e.target.signupState.value
      },
      bio: e.target.signupBio.value,
      currentPosition: e.target.signupPosition.value,
      company: e.target.signupCompany.value,
      yearsExperience: e.target.signupExperience.value,
      education: e.target.signupEducation.value,
      school: e.target.signupSchool.value,
      industry: e.target.signupIndustry.value,
      skills: e.target.signupSkills.value.split(" "),
      interests: e.target.signupInterests.value.split(" "),
    };
    const config = {
      method: "post",
      data: newUser,
      url: 'http://localhost:8080/signup',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios(config)
      .then(res => {
        this.props.history.push('/login');
      })
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.isSignedUp) {
      this.props.history.push('/login')
    }
    return (
      <div className="signup">
        <h1 className="signup__title">Sign Up for Bridge</h1>
        <div className="signup__connectImg">
          <img src="./Assets/Images/connect.jpeg" alt="Connect" />
        </div>
        <form ref={this.signupForm} onSubmit={this.submitSignup}>
          <label className="signup__type select">
            <h3>Profile Type:</h3>
            <select name="signupType">
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
            </select>
          </label>
          <div className="signup__name">
            <h3>Name:</h3>
            <div>
              <input type="text" name="signupFName" placeholder="First Name" required />
              <input type="text" name="signupLName" placeholder="Last Name" required />
            </div>
          </div>
          <label className="signup__email input">
            <h3>Email:</h3>
            <input type="email" name="signupEmail" placeholder="Email" required />
          </label>
          <label className="signup__password input">
            <h3>Password:</h3>
            <input type="password" name="signupPassword" placeholder="Password" required />
          </label>
          <label className="signup__birthday input">
            <h3>Birth Date:</h3>
            <input type="date" name="signupBirthday" placeholder="Birth Date" required />
          </label>
          <label className="signup__address input">
            <h3>Address:</h3>
            <input type="text" name="signupAddress" placeholder="Address Line" required />
          </label>
          <label className="signup__postal input">
            <h3>Postal Code:</h3>
            <input type="text" name="signupPostal" placeholder="Postal Code" required />
          </label>
          <label className="signup__city input">
            <h3>City:</h3>
            <input type="text" name="signupCity" placeholder="City" required />
          </label>
          <label className="signup__state select" required>
            <h3>State:</h3>
            <select name="signupState" >
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NS">Nova Scotia</option>
              <option value="NT">Northwest Territories</option>
              <option value="NV">Nunavut</option>
              <option value="ON">Ontario</option>
              <option value="PE">P.E.I</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
              <option value="YT">Yukon</option>
            </select>
          </label>
          <label className="signup__bio">
            <h3>Bio:</h3>
            <textarea type="text" name="signupBio" placeholder="Bio" required />
          </label>
          <label className="signup__position select">
            <h3>Current Position:</h3>
            <select name="signupPosition" >
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unmployed</option>
              <option value="Student">Student</option>
            </select>
          </label>
          <label className="signup__company input">
            <h3>Company:</h3>
            <input type="text" name="signupCompany" placeholder="Company" required />
          </label>
          <label className="signup__experience input">
            <h3>Years of Experience:</h3>
            <input type="text" name="signupExperience" placeholder="Experience" required />
          </label>
          <label className="signup__education select">
            <h3>Highest Current Education:</h3>
            <select name="signupEducation" required>
              <option value="None">None</option>
              <option value="Highschool">High School Diploma</option>
              <option value="Diploma">College Diploma</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="PhD">PhD</option>
            </select>
          </label>
          <label className="signup__school input">
            <h3>School:</h3>
            <input type="text" name="signupSchool" placeholder="School" required />
          </label>
          <label className="signup__industry select">
            <h3>Industry:</h3>
            <select name="signupIndustry" required>
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
          <label className="signup__skills input">
            <h3>Skills: (separate by space)</h3>
            <input type="text" name="signupSkills" placeholder="Skills" required />
          </label>
          <label className="signup__interests input">
            <h3>Interests: (separate by space)</h3>
            <input type="text" name="signupInterests" placeholder="Interests" required />
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

export default Signup;