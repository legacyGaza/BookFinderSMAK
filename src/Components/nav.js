import React, { Fragment } from 'react';
import './Navbar/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <ul className='navbar'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/login'>Sign in</a>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Navbar;
