// importing used files and options
import React, { Component } from "react";
import firebase from "firebase";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Header from "./Header/logo";

// initializing firebase
firebase.initializeApp({
  apiKey: "AIzaSyCKD1Uydm10LcXglQPGFWYqDDEuy1hAnu8",
  authDomain: "reactlogin-c308d.firebaseapp.com",
});

// create GoLogin Component
class GoLogin extends Component {
  state = { isSignedIn: false, step: 1, redirect: false };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/user" />;
    }
  };
  //UI config for sign in
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };
  //Load data from a remote endpoint
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    const { step } = this.state;
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <div className="G">
            {this.state.isSignedIn ? (
              <span>
                <div>Signed In!</div>
                <button onClick={() => firebase.auth().signOut()}>
                  Sign out!
                </button>
                {this.renderRedirect()}
                <button onClick={this.setRedirect}>Redirect</button>
                <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              </span>
            ) : (
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
          </div>
        );
      case 2:
        return (
          <Router>
            <Header /> <br />
          </Router>
        );
    }
  }
}

// export GoLogin Component

export default GoLogin;
