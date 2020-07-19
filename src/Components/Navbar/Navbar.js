//Navbar Component
// import modules
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";

//Create Landing Component
class Landing extends Component {
  //logOut func
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  //Rendering Navbar form
  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/user" className="nav-link">
            My info
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/AddExpenses" className="nav-link">
            Add Expenses
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Expenses" className="nav-link">
            Expenses
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Tips" className="nav-link">
            Tips
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    );
  }
}

// Exporting logout Component
export default withRouter(Landing);
