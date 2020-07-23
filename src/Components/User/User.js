// User Component
// import necessary modules
import React, { Component } from "react";
import axios from 'axios';



// User Component
class User extends Component {
  state = {
    first_name: "",
    last_name: ""
  }
  componentDidMount() {
    //Sends a GET request to get user info
    axios.get('http://localhost:4040/user', {
      params: {
        email: localStorage.useremail
      }
    })
      .then((res) => {
        this.setState(
          {
            first_name: res.data.first_name,
            last_name: res.data.last_name
          }
        )
      }).catch((error) => {
        console.log(error)
      });
  }


  //Rendering User info form
  render() {
    return (
      <div>
        <div>
          <div>
            <h1>My info</h1>
          </div>
          <table className="infoTable">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name === undefined ? "Loading ...": this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name === undefined ? "Loading ..." : this.state.last_name}</td>
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