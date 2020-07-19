import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import cors from 'cors';

//registeration page & switch to login page
class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  // save the information in db
  handleSubmit(event) {
    const { FirstName, LastName, Email, Password } = this.state;

    axios
      .post(`http://localhost:5000/register`, {
        FirstName,
        LastName,
        Email,
        Password,
      })
      .then((response) => {
        if (response.data === 'created') {
          console.log('NOW LOGIN TO CONFIRM YOUR  ACCOUNT');
          this.props.setUserAuth(true);
          this.props.history.push('/auth/login');
        }
        alert('NOW LOGIN TO CONFIRM YOUR  ACCOUNT');
      })
      .catch((error) => {
        console.log('registration error', error);
        this.props.setUserAuth(false);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div class='loginform'>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            class='inputbox'
            type='text'
            name='FirstName'
            placeholder='FirstName'
            value={this.state.FirstName}
            onChange={this.handleChange}
            required
          />
          <br />

          <input
            class='inputbox'
            type='text'
            name='LastName'
            placeholder='LastName'
            value={this.state.LastName}
            onChange={this.handleChange}
            required
          />
          <br />

          <input
            class='inputbox'
            type='email'
            name='Email'
            placeholder='Email'
            value={this.state.Email}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            class='inputbox'
            type='password'
            name='Password'
            placeholder='Password'
            value={this.state.Password}
            onChange={this.handleChange}
            required
          />
          <br />

          <button type='submit' class='butooon'>
            Register
          </button>
          <hr />
          <p>
            you have alredy email ! <Link to='/auth/login'> login now</Link>
          </p>
        </form>
      </div>
    );
  }
}
export default withRouter(Registration);
