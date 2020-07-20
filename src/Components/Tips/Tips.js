// Profile Component
// import modules
import React, { Component } from "react";

//Create User Component
class Tips extends Component {

  //Rendering User info form
  render() {
    return <div className="container">
      <p>
        If you’re making a budget, congrats!
        For many people, having more money seriously adds to their freedom
        — and budgeting is a great way of giving yourself as much financial freedom as possible in the future,
        as well as improving your financial situation in the present.<br />
        When planning remember to include things like:<hr />
        Rent<br />
        Groceries<br />
        Daily Incidentals<br />
        Irregular Expenses and Emergency Fund<br />
        Household Maintenance<br />
        Guests<br />
        Travel Expenses<br />
        Memberships<br />
        Prescriptions<br />
        Pet Care<br />
        Identifying common, recurring expenses, like rent or mortgage payments, can help you plan your spending and create a budget<br />
        Have fun planning    ; )
      </p>
    </div>;
  }
}

// Exporting User Component
export default Tips;
