// login Component
// import modules
import React, { Component } from 'react';
import { login } from '../UserFunctions/UserFunctions';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import GooLogoin from "../gooLogin";
// import GooLogout from "../gooLogout";
// import GoLogin from "../GoLogin";
//Create Login Component

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
          this.props.history.push('/AddExpenses');
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
              <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
              <div className='form-group'>
                <label htmlFor='email'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  placeholder='Enter email'
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
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
              {/*<GoLogin />
              <GooLogoin />
              <GooLogout /> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// Exporting Login Component
export default Login;
