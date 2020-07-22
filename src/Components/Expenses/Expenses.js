// Expenses Component
// import modules
import React, { Fragment } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

//Create Expenses Component
class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      email: "",
      value: "",
      expensetype: "",
    };
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handlerSubmit(event) {
    event.preventDefault();
    var email = localStorage.getItem("useremail");
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
        alert("Something went wrong");
      });
  }

  ////////////////////////////////////////
  handlerSubmit2(event) {
    event.preventDefault();
    var email = localStorage.getItem("useremail");
    axios
      .get(`http://localhost:4040/search/${email}`)
      .then((res) => {
        const expenses = res.data;
        console.log(expenses);
        this.setState({
          expenses: expenses,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  }

  render() {
    return (
      // general form for expenses compo
      <Fragment>
        <div className="container">
          <form>
            <button
              variant="btn btn-success"
              onClick={this.handlerSubmit.bind(this)}
            >
              {" "}
              Refresh{" "}
            </button>
            <table style={{ width: "100%" }}>
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
          </form>
        </div>
        {/* second form */}
        <div className="container">
          <form onSubmit={this.handlerSubmit.bind(this)}>
            <label>Search By</label> &nbsp;
            <select
              name="expensetype"
              value={this.state.expensetype}
              onChange={this.changeHandler.bind(this)}
            >
              <option value="expensetype">Type</option>
              <option value="item">Item</option>
              <option value="amount">Amount</option>
            </select>
            <input
              type="text"
              name="value"
              value={this.state.value}
              placeholder="Search"
              onChange={this.changeHandler.bind(this)}
            ></input>
            &nbsp;
            <button onClick={this.handlerSubmit2.bind(this)}>Search</button>
            <br />
            <table style={{ width: "100%" }}>
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
                  if (Number(this.state.value)) {
                    var amount = Number(this.state.value);
                    if (element[this.state.expensetype] === amount) {
                      return (
                        <tr key={index}>
                          <td>{element.item}</td>
                          <td>{element.expensetype}</td>
                          <td>{element.amount}</td>
                          <td>{element.description}</td>
                        </tr>
                      );
                    }
                  } else if (
                    element[this.state.expensetype] === this.state.value
                  ) {
                    return (
                      <tr key={index}>
                        <td>{element.item}</td>
                        <td>{element.expensetype}</td>
                        <td>{element.amount}</td>
                        <td>{element.description}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </form>
        </div>
      </Fragment>
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
