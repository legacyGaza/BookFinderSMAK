// Landing Component
// import modules
import React, { Component } from 'react';

//Create Landing Component
class Landing extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <h1 className='land-title'>WELCOME</h1>

          <button>
            <a href='/login'>LOG IN</a>
          </button>

          <button>
            <a href='/register'>Register</a>
          </button>
        </div>
      </div>
    );
  }
}
// Exporting Landing Component
export default Landing;
