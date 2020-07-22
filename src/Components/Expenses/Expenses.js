// Expenses Component
// import modules
import React from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

//Create Expenses Component
class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      email: '',
    };
  }
  // componentDidMount() {
  //   const token = localStorage.usertoken;
  //   const decoded = jwt_decode(token);
  //   this.setState({
  //     email: decoded.email,
  //   });
  // }
  //handlerSubmit function
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

  render() {
    return (
      // general form for expenses compo
      <form onSubmit={this.handlerSubmit.bind(this)}>
        <div className='myDiv'>
          <button variant='btn btn-success'> Refresh </button>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Item</th>
                <th>type</th>
                <th>Amount</th>
                <th>Descritption</th>
              </tr>
            </thead>
            <tbody>
              {this.state.expenses.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{element.item}</td>
                    <td>{element.expensetype}</td>
                    <td>{element.amount}</td>
                    <td>{element.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </form>
    );
  }
}

// amount: 500;
// date: '2020-07-22T00:00:00.000Z';
// description: "for karam's birthday";
// expensetype: 'Food';
// item: 'watermelon';
// Exporting Expenses Component
export default Expenses;
