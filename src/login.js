import React from 'react';
import cors from 'cors';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

//login componant
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  //check if the email and password are exist in db
  handleSubmit(event) {
    const { email, password } = this.state;
    //got information from db
    axios
      .get(
        `http://localhost:5000/login/${this.state.email}/${this.state.password}`,
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data === true) {
          this.props.setUserAuth(true);
          this.props.history.push('/auth/Search');
        } else {
          alert('LogIn faild . . Make sure the information is correct');
        }
      })
      .catch((error) => {
        console.log('login error', error);
        this.props.setUserAuth(false);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div class='loginform'>
        <h1>Log in Now</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            class='inputbox'
            type='email'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <br />

          <input
            class='inputbox'
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <br />
          <button type='submit' class='butooon'>
            Login
          </button>
          <hr />
          <p>
            Dont have an account ? <Link to='/auth/reg'> Sgin up</Link>{' '}
          </p>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
