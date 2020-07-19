// Expenses Component
// import modules
import React from "react";
import axios from "axios";
// import { Button } from "react-bootstrap";
import Trans from "../Trans/Trans";
import jwt_decode from "jwt-decode";

//Create Expenses Component
class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Trans: [],
      email: "",
    };
  }
  // handlerChange function
  handlerChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name);
  }

  // componentDidMount function
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      email: decoded.email,
    });
  }
  //handlerSubmit function
  handlerSubmit(event) {
    event.preventDefault();
    axios
      .get(`http://localhost:4040/expenses/${this.state.email}`)
      .then((res) => {
        const finalResult = res.data;
        this.setState({ Trans: finalResult });
        console.log(finalResult);
      })
      .catch((err) => {
        alert("Hello!! nothing to shown");
        console.log(err);
      });
  }
  // getAmountOfMoney
  getAmountOfMoney = (event) => {
    this.setState({
      amout: event.target.value,
    });
  };
  render() {
    return (
      // general form for expenses compo
      <form onSubmit={this.handlerSubmit.bind(this)}>
        <div className="myDiv">
          <label> Expenses List: </label>
          <br />
          <button variant="btn btn-success"> Show Expenses</button>
          <Trans Trans={this.state.Trans} />
          {/* <ul>
            {this.state.Trans.map((element, index) => (
              <li key={index}>
                {element.expensesTypes}....{element.amount}...
                {element.description}
              </li>
            ))}
          </ul> */}
        </div>
      </form>
    );
  }
}
// Exporting Expenses Component
export default Expenses;
