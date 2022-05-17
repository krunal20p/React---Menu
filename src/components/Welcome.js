import React, { Component } from "react";

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Date: "17 May 2022"
        };


    }
    render() {
        return (
            <div>
                <h1>Welcome to Demo!</h1>
                <p>Today is {this.state.Date}</p>
            </div>
            
        )
    }
}



export default Welcome