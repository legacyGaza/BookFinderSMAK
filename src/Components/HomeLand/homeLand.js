// Home

import React, { Component } from 'react';


class HomeLand extends Component {
    logOut(e) {
        e.preventDefault();
        localStorage.removeItem("useremail");
        this.props.history.push(`/`);
    }
    render() {
        return (
            <div className='container'>
                <div>
                    <h1 className='land-title'>Hello there!</h1>
                    <p style={{ color: "white" }}><b>Let's keep track of today's expenses!</b></p>

                    <button>
                        <a href='/user'>My Info</a>
                    </button>

                    <button>
                        <a href='/AddExpenses'>Add Expenses</a>
                    </button>

                    <button>
                        <a href='/expenses'>Expenses</a>
                    </button>

                    <button>
                        <a href='/Tips'> Tips </a>
                    </button>

                    <button>
                        <a href='/Logout' onClick={this.logOut.bind(this)}> Log Out </a>
                    </button>
                </div>
            </div>
        );
    }
}

export default HomeLand;
