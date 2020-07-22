// register Component
// import modules
import React, { Component } from 'react';
import axios from 'axios';

//Create Register Component
class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // onChange function
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // onSubmit function
  onSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:4040/register', {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        var { message, user } = response.data;
        console.log(response.data);
        localStorage.setItem('useremail', user.email);
        console.log(message);
        alert(message);

        if (message === 'Registered') {
          this.props.history.push('/AddExpenses');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //Rendering Register form
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mt-5 mx-auto'>
            <form noValidate onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>First name</label>
                <br />
                <input
                  type='text'
                  className='form-control'
                  name='first_name'
                  placeholder='Enter your first name'
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Last name</label>
                < br/>
                <input
                  type='text'
                  className='form-control'
                  name='last_name'
                  placeholder='Enter your lastname name'
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email address</label>
                <br />
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
                < br/>
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
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
// Exporting Register Component
export default Register;
