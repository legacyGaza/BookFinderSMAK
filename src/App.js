// importing used files and options Header,Navbar,Landing,Login,Register,AddExpenses,Expenses,user
import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./App.css";
import Home from "./Home";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AddExpenses from "./Components/AddExpenses/AddExpenses";
import Expenses from "./Components/Expenses/Expenses";
import User from "./Components/User/User";
import Tips from "./Components/Tips/Tips";

// creat App Component
class App extends Component {
  state = { step: 1 };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // rendering step for showing our home page
  render() {
    const { step } = this.state;
    //Switch with cases
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          // App div
          <div className="App">
            {/* Router and Routes for
            register,login,AddExpenses,Expenses,user,Home */}
            <Router>
              <div className="App">
                <Navbar />
                <Route exact path="/" component={Landing} />
                <div className="container">
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/AddExpenses" component={AddExpenses} />
                  <Route exact path="/Expenses" component={Expenses} />
                  <Route exact path="/user" component={User} />
                  <Route exact path="/Home" component={Home} />
                  <Route exact path="/Tips" component={Tips} />
                </div>
              </div>
            </Router>
          </div>
        );
    }
  }
}
// Exporting App Component
export default App;
