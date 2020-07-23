import React, { Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Tobye extends React.Component {
  state = {
    text: '',
    list: [],
  };

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      const { list } = this.props.location.state;
      console.log('=================================================>', list);
      this.setState({
        list: list,
      });
    }
  }

  add(e) {
    this.state.list.push(this.state.text);
    this.setState({
      text: '',
    });
  }

  delete(e) {
    this.state.list.splice(e.target.index, 1);
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <Fragment>
        <div className='container'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            placeholder='things to by'
            onChange={this.changeHandler.bind(this)}
          ></input>
          <button onClick={this.add.bind(this)}>
            <a>Add</a>
          </button>
          {this.state.list.map((element, index) => {
            return (
              <div
                key={index}
                className='list'
                onClick={this.delete.bind(this)}
              >
                <Link
                  to={{
                    pathname: '/AddExpenses',
                    state: {
                      list: this.state.list,
                    },
                  }}
                >
                  {element}
                </Link>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Tobye;
