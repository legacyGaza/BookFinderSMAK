import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Showone from './showone';

//search component
class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      input: ' ',
      title: [],
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') this.handleSubmit();
  }
  handleSubmit(e) {
    e.preventDefault();
    const { input } = this.state;

    // use api google books
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=` + this.state.input)
      .then((result) => {
        const resultArray = result.data.items;
        this.setState({ title: resultArray });
        this.setState({ input: '' });
      })
      .catch((err) => {
        console.log('Error------->', err);
      });
  }
  clearText() {
    this.setState({ input: '' });
  }

  render() {
    return (
      <div id='search'>
        <h1 id='header'>
          <span id='wh'> Book </span> <span id='finder'>Finder</span>{' '}
        </h1>
        <div id='links'>
          {/* switch to favorite list */}
          <Link to='/auth/Fav' class='right'>
            <button class='zer'> Favorite </button>
          </Link>

          {/* switch to read later list */}
          <Link to='/auth/read' class='right'>
            <button class='zer'> Read later </button>
          </Link>
        </div>

        <div class='buttonIn'>
          <button
            id='butn'
            onClick={this.handleSubmit.bind(this)}
            class='loginbutton'
          >
            Search
          </button>
          <input
            class='logemailandpassword'
            id='inpt'
            type='search'
            name='input'
            placeholder='Type, auther, book name, subject ...'
            value={this.state.input}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <hr id='khat' />

        <Showone titles={this.state.title} />
      </div>
    );
  }
}

export default withRouter(SearchBooks);
