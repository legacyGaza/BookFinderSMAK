import React, { Fragment, Component } from 'react';

class Search extends React.Component {
  state = {
    user: [],
    value: '',
    expensetype: '',
  };

  handlerSubmit(event) {
    event.preventDefault();
    var email = localStorage.getItem('useremail');
    axios
      .get(`http://localhost:4040/expenses/${email}`)
      .then((res) => {
        const expenses = res.data;
        console.log(expenses);
        this.setState({
          expenses: expenses,
        });
      })
      .catch((err) => {
        console.log(err);
        alert('Something went wrong');
      });
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    <div className='container'>
      <form onSubmit={this.handlerSubmit.bind(this)}>
        <label>Search By</label>
        <select
          name='expensetype'
          value={this.state.expensetype}
          onChange={this.changeHandler.bind(this)}
        >
          <option value='Type'>Type</option>
          <option value='Item'>Item</option>
          <option value='Amount'>Amount</option>
        </select>
        <input
          type='text'
          name='value'
          value={this.state.value}
          placeholder='Search'
        ></input>
      </form>
    </div>;
  }
}
