//Trans Component
// import modules
import React from "react";
import ReactDOM from "react-dom";
import "./Trans.css";

//Create Trans Component
class Trans extends React.Component {
  renderTableData = () => {
    return this.props.Trans.map((element, index) => {
      const { expensesTypes, description, amount } = element;
      return (
        <tr key={index}>
          <td>{expensesTypes}</td>
          <td>{description}</td>
          <td>{amount}</td>
        </tr>
      );
    });
  };

  //Rendering Trans form
  render() {
    const { Trans } = this.props;
    return (
      <div>
        <table id="tbl">
          <thead>
            <tr>
              <th>Expenses Types </th>
              <th>Description </th>
              <th> Amount($) </th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
// Exporting Trans Component
export default Trans;
