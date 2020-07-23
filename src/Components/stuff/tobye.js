import React, { Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Tobye extends React.Component {
  state = {
    text: '',
    list: [],
  };

  componentDidMount() {
    var list1 = localStorage.getItem('list');
    var list2 = list1.split(',');
    console.log(list2);

    this.setState({
      list: list2,
    });
    // if (this.props.location.state !== undefined) {
    //   const { list } = this.props.location.state;
    //   console.log('=================================================>', list);
    //   this.setState({
    //     list: list,
    //   });
    // }
  }

  add(e) {
    this.state.list.push(this.state.text);
    this.setState({
      text: '',
    });
    localStorage.setItem('list', this.state.list);
    this.componentDidMount();
  }

  delete(e) {
    console.log(e.target.innerText);
    var val = `${e.target.innerText}`;

    var index = this.state.list.indexOf(val);
    this.state.list.splice(index, 1);

    localStorage.setItem('list', this.state.list);
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
