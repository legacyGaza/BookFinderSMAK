//Header Component
// importing modules
import React, { Component } from "react";
import "./logo.css";

//Create Expenses Component
var Header = (props) => {
  return (
    <div>
      <img
        className="center"
        src="https://www.newtechq.com/static/img/cash-expenses-logo.png"
      ></img>
      <br />
    </div>
  );
};
// Exporting Header Component
export default Header;
