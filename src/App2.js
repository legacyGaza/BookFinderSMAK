import React from 'react';
import './App.css';
import SearchBooks from './search.js';
import Falist from './favare';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Readlater from './readlater.js';

//switch between search page & favorite page and read later page
class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }
  setUserAuth = (value) => this.setState({ isAuthenticated: value });
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route path='/auth/Search'>
              <SearchBooks setUserAuth={this.setUserAuth} id='s' />
            </Route>
            <Route exact path='/auth/Fav'>
              <Falist setUserAuth={this.setUserAuth} />
            </Route>
            <Route exact path='/auth/read'>
              <Readlater setUserAuth={this.setUserAuth} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App2;
