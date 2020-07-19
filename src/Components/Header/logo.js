//Header Component
// importing modules
import React, { Component } from "react";
import "./logo.css";
import Income from "../incomeFomr/ienterIncome";

//Create Expenses Component
var Header = (props) => {
  console.log(Income.state);
  return (
    <div>
      <img
        class="center"
        src="https://www.newtechq.com/static/img/cash-expenses-logo.png"
      ></img>
      <br />
      {/* <h1>{props.state.amount}</h1> */}
    </div>
  );
};
// Exporting Header Component
export default Header;
