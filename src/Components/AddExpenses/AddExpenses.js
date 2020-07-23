// Expenses Component
// import modules
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Create Expenses Component
class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expensetype: '',
      item: '',
      amount: '',
      date: '',
      description: '',
      list: [],
    };
  }

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      const { list } = this.props.location.state;
      console.log(list, '<============================');
      this.setState({
        list: list,
      });
    }
  }

  // changeHandler function
  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  //submitHandler function
  submitHandler(event) {
    var namount = Number(this.state.amount);
    event.preventDefault();
    var email = localStorage.getItem('useremail');
    axios
      .put('http://localhost:4040/expenses', {
        email: email,
        expenses: {
          amount: this.state.amount,
          date: this.state.date,
          item: this.state.item,
          description: this.state.description,
          expensetype: this.state.expensetype,
        },
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log('falure ====>', err);
      });
    this.setState({
      expensetype: '',
      amount: '',
      date: '',
      description: '',
      item: '',
    });
  }

  render() {
    return (
      // general form for add expenses compo
      <form>
        <div className='myDiv'>
          <br />
          <select
            type='text'
            name='expensetype'
            value={this.state.expensetype}
            onChange={this.changeHandler.bind(this)}
            className='type'
          >
            <option value=''>Type </option>
            <option value='Food'>Food</option>
            <option value='Clothes'>Clothes</option>
            <option value='Transportation'>Transportation</option>
            <option value='Technology'>Technology</option>
            <option value='Other'>Other</option>
          </select>
          <br />

          {/* date input for expenses*/}
          <input
            type='date'
            name='date'
            value={this.state.date}
            onChange={this.changeHandler.bind(this)}
            placeholder='Enter date...'
          ></input>
          <br />

          <input
            type='text'
            name='item'
            value={this.state.item}
            onChange={this.changeHandler.bind(this)}
            placeholder='Enter item'
          ></input>
          <br />

          {/* amount input for expenses*/}
          <input
            type='number'
            name='amount'
            value={this.state.amount}
            onChange={this.changeHandler.bind(this)}
            placeholder='Enter amount...'
          ></input>
          <br />

          <textarea
            type='text'
            name='description'
            value={this.state.description}
            onChange={this.changeHandler.bind(this)}
            placeholder='add a note'
          ></textarea>
          <br />
          <br />
          {/* Add transaction button send to db*/}
          <button
            variant='btn btn-success'
            onClick={this.submitHandler.bind(this)}
          >
            <a>Add</a>
          </button>

          <button>
            <a href='/expenses'>Show</a>
          </button>
          <button>
            <Link
              to={{
                pathname: '/list',
                state: {
                  list: this.state.list,
                },
              }}
            >
              To spend
            </Link>
          </button>
        </div>
      </form>
    );
  }
}
// Exporting Expenses compo
export default Expenses;
