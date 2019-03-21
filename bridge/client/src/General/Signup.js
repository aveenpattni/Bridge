import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(){
    super();
    this.state={
      type:"student",
      isSignedUp: false
    }
    this.signupForm = React.createRef();
  }
  submitSignup = e => {
    e.preventDefault();
    if(e.target.signupType.value === "student") {
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
        education: e.target.signupEducation.value,
        school: e.target.signupSchool.value.toLowerCase(),
        industry: e.target.signupIndustry.value,
        skills: e.target.signupSkills.value.toLowerCase().split(" "),
        interests: e.target.signupInterests.value.toLowerCase().split(" ")
      };
      const config = {
        method: "post",
        data: newUser,
        url: 'http://localhost:8080/signup',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      axios(config).then(res=>{
        this.props.history.push('/login');
      })
      .catch(err=>console.log(err));
    }
    if(e.target.signupType.value === "mentor") {
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
        company: e.target.signupCompany.value.toLowerCase(),
        yearsExperience: e.target.signupExperience.value,
        education: e.target.signupEducation.value,
        school: e.target.signupSchool.value.toLowerCase(),
        industry: e.target.signupIndustry.value,
        skills: e.target.signupSkills.value.toLowerCase().split(" "),
        interests: e.target.signupInterests.value.toLowerCase().split(" "),
        connectionLimit: e.target.signupLimit.value
      };
      const config = {
        method: "post",
        data: newUser,
        url: 'http://localhost:8080/signup',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      axios(config).then(res=>{
        this.props.history.push('/login');
      })
      .catch(err=>console.log(err));
    }
  }
  typeChange = e => {
    this.setState({
      type: e.target.value
    });
  }
  render() {
    if(this.state.isSignedUp) {
      this.props.history.push('/login')
    }
    return (
      <div className="signup">
        <h1 className="signup__title">Sign Up for Bridge</h1>
        <img className="signup__connectImg" src="./Assets/Images/connect.jpeg" alt="Connect" />
        <form ref={this.signupForm} onSubmit={this.submitSignup}>
          <label className="signup__type select">
            <h3>Profile Type:</h3>
            <select name="signupType" onChange={this.typeChange}>
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
            </select>
          </label>
          <div className="signup__name">
            <h3>Name:</h3>
            <div>
              <input type="text" name="signupFName" placeholder="First Name" required/>
              <input type="text" name="signupLName" placeholder="Last Name" required/>
            </div>
          </div>
          <label className="signup__email input">
            <h3>Email:</h3>
            <input type="email" name="signupEmail" placeholder="Email" required/>
          </label>
          <label className="signup__password input">
            <h3>Password:</h3>
            <input type="password" name="signupPassword" placeholder="Password" required/>
          </label>
          <label className="signup__birthday input">
            <h3>Birth Date:</h3>
            <input type="date" name="signupBirthday" placeholder="Birth Date" required/>
          </label>
          <label className="signup__address input">
            <h3>Address:</h3>
            <input type="text" name="signupAddress" placeholder="Address Line" required/>
          </label>
          <label className="signup__postal input">
            <h3>Postal Code:</h3>
            <input type="text" name="signupPostal" placeholder="Postal Code" required/>
          </label>
          <label className="signup__city input">
            <h3>City:</h3>
            <input type="text" name="signupCity" placeholder="City" required/>
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
            <textarea type="text" name="signupBio" placeholder="Bio" required/>
          </label>
          <label className="signup__position select">
            <h3>Current Position:</h3>
            <select name="signupPosition" >
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unmployed</option>
              <option value="Student">Student</option>
            </select>
          </label>
          {
            this.state.type==="mentor" ?
            (
              <label className="signup__company input">
                <h3>Company:</h3>
                <input type="text" name="signupCompany" placeholder="Company" required/>
              </label>
            ) : <></>
          }
          {
            this.state.type==="mentor" ?
            (
              <label className="signup__experience input">
                <h3>Years of Experience:</h3>
                <input type="text" name="signupExperience" placeholder="Experience" required/>
              </label>
            ) : <></>
          }
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
            <input type="text" name="signupSchool" placeholder="School" required/>
          </label>
          <label className="signup__industry select">
            <h3>Industry:</h3>
            <select name="signupIndustry" required>
              <option value="Accounting">Accounting</option>
              <option value="Marketing">Marketing</option>
              <option value="Software Development">Software Development</option>
            </select>
          </label>
          <label className="signup__skills input">
            <h3>Skills: (separate by space)</h3>
            <input type="text" name="signupSkills" placeholder="Skills" required/>
          </label>
          <label className="signup__interests input">
            <h3>Interests: (separate by space)</h3>
            <input type="text" name="signupInterests" placeholder="Interests" required/>
          </label>
          {
            this.state.type==="mentor" ?
            (
              <label className="signup__limit input">
                <h3>Connection Limit:</h3>
                <input type="number" name="signupLimit" placeholder="Connection Limit" required/>
              </label>
            ) : <></>
          }
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

export default Signup;