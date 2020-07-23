// login Component
// import modules
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //onChange function
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //onSubmit function
  onSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:4040/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        localStorage.setItem('useremail', response.data.email);
        // var email = localStorage.getItem('useremail');
        alert(response.data.message);
        if (response.data.message === 'welcome to our website') {
          this.props.history.push('/homeLand');
        }
      })
      .catch((err) => {
        // alert('Wrong Email or Password');
        console.log(err);
      });
  }

  //Rendering login form
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mt-5 mx-auto'>
            <form noValidate onSubmit={this.onSubmit}>
              <div className='form-group'>
              
                <br />
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  placeholder='Email Address'
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <br />
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type='submit'
                className='btn btn-lg btn-primary btn-block'
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// Exporting Login Component
export default Login;
