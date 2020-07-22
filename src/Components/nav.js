import React, { Fragment } from 'react';
import './Navbar/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <Fragment>
          <div>
            <ul className='navbar'>
              <li>
                <a href={localStorage.useremail ? '/homeLand' : '/'}>Home</a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='/contact'>Contact</a>
              </li>
            </ul>
          </div>
        </Fragment>
      </header>

    );
  }
}

export default Navbar;
