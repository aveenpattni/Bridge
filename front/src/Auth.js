import auth0 from 'auth0-js';

class Auth {
  //Creating an auth0.WebAuth instance
  auth0 = new auth0.WebAuth({
    //Configuration for Bridge and a domain
    domain: 'aveenpattni.auth0.com',
    clientID: 'Q7zLaFIUK3V87Sqn62gGVKfTl3HmtB3B',
    redirectUri: 'http://localhost:3000/callback',
    //Response type to show that you need a user's Access Token and an ID Token after authentication
    responseType: 'token id_token',
    //Specifying that an access_token  that can be used to invoke the /userinfo endpoint
    scope: 'openid'
  });

  //Login function
  login = () => {
    this.auth0.authorize();
  }

  //Looks for the result of authentication in the URL hash. Result is processed with the parseHash method
  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        //history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  //Sets the user's Access Token, ID Token, and the Access Token's expiry time
  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('accessToken', authResult.accessToken);
    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    // navigate to the home route
    //history.replace('/home');
  }

  //Logout function - removes the user's token and expiry time from browser storage
  logout() {
    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
    // navigate to the home route
    //history.replace('/home');
  }
}

let auth = new Auth();
export default auth;