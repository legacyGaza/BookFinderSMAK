// Expenses Component
// import modules
import React from "react";
import axios from "axios";
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
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  }
  render() {
    return (
      // general form for expenses compo
      <form onSubmit={this.handlerSubmit.bind(this)}>
        <div className="myDiv">
          <Trans Trans={this.state.Trans} /><br /><br />
          <button variant="btn btn-success"> Refresh </button>
        </div>
      </form>
    );
  }
}
// Exporting Expenses Component
export default Expenses;
