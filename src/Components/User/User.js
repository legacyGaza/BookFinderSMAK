// Profile Component
// import modules
import React, { Component } from "react";
import axios from 'axios';



//Create User Component
let first_name;
let last_name;
class User extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    axios.get('http://localhost:4040/user', {
      params: {
        email: localStorage.useremail
      }
    })
      .then((res) => {
        first_name = res.data.first_name;
        last_name = res.data.last_name;
      }).catch((error) => {
        console.log(error)
      });
  }


  //Rendering User info form
  render() {
    if (first_name === undefined || last_name === undefined) {
      return <div />
    }
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">User info</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{localStorage.useremail}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// Exporting User Component
export default User;
