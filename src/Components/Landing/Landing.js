// Landing Component
// import modules
import React, { Component } from 'react';

//Create Landing Component
class Landing extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron mt-5'>
          <div className='col-sm-8 mx-auto'>
            <h1 className='text-center'>WELCOME</h1>
            <a href='/login'>
              <button>LOG IN</button>
            </a>
            <a href='/register'>
              <button>Register</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
// Exporting Landing Component
export default Landing;
