// Expenses Component
// import modules
import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
// import { Button } from "react-bootstrap";
// Create Expenses Component
class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expensetype: "",
      item: "",
      amount: "",
      date: "",
      description: "",
    };
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
    var email = localStorage.getItem("useremail");
    axios
      .put("http://localhost:4040/expenses", {
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
        console.log("falure ====>", err);
      });
    // this.setState({
    //   expensetype: '',
    //   amount: '',
    //   date: '',
    //   description: '',
    //   item: '',
    // });
  }

  render() {
    return (
      // general form for add expenses compo
      <form onSubmit={this.submitHandler.bind(this)}>
        <div className="myDiv">
          <label> Types: </label>
          <br />
          <select
            type="text"
            name="expensetype"
            value={this.state.expensetype}
            onChange={this.changeHandler.bind(this)}
          >
            <option value="none"> </option>
            <option value="Food">Food</option>
            <option value="Clothes">Clothes</option>
            <option value="Transportation">Transportation</option>
            <option value="Technology">Technology</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <label> Date : </label>
          <br />
          {/* date input for expenses*/}
          <input
            type="date"
            name="date"
            className="testInput1"
            value={this.state.date}
            onChange={this.changeHandler.bind(this)}
            placeholder="Enter date..."
          ></input>
          <br />
          <label> Item </label>
          <br />
          <input
            type="text"
            name="item"
            className="testInput2"
            value={this.state.item}
            onChange={this.changeHandler.bind(this)}
            placeholder="Enter item"
          ></input>
          <br />
          {/* description input for expenses*/}
          <label> Amount : </label>
          <br />
          {/* amount input for expenses*/}
          <input
            type="number"
            name="amount"
            className="testInput3"
            value={this.state.amount}
            onChange={this.changeHandler.bind(this)}
            placeholder="Enter amount..."
          ></input>
          <br /> <br />
          <label>Note</label>
          <br />
          <input
            type="text"
            name="description"
            className="testInput4"
            value={this.state.description}
            onChange={this.changeHandler.bind(this)}
            placeholder="add a note"
          ></input>
          <br />
          <br />
          {/* Add transaction button send to db*/}
          <button variant="btn btn-success"> Add transaction</button>
        </div>
      </form>
    );
  }
}
// Exporting Expenses compo
export default Expenses;
