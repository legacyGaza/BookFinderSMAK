
import React, { Component } from 'react';
class Income extends Component{

  
    
    income =(e)=>{
        e.preventDefault();       
        
    }
    incomeData = (e)=>{
        this.props.amountFromFather(e.target.value);
  
    }
    render(){
        return(
            <form onSubmit = {this.income}>
               <input type="number" onChange={this.incomeData}></input>
               <button type ="submit"> Add Money </button>
            </form>

        )
    }

}
export default Income;




