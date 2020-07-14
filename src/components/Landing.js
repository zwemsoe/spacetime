import React, {Component} from 'react';


class Landing extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        console.log("reached inside Landing.js!")
        return (
            <div>
                <div className = "introText">
                <p>Welcome, Astronaut! </p>
                <p>Where would you like to go today?</p>

                <div className= "row button-group">
                    <div className = "col">
                    <a href="/#" onClick = {() => {this.props.setDestination(1)}} className ="btn btn-light moonBtn">Moon(25min)</a>
                    </div>
                    <div className = "col">
                    <a href="/#" onClick ={() => {this.props.setDestination(2)}} className ="btn btn-light moonBtn">Mars(45mins)</a>
                    </div>
                    <div className = "col">
                    <a href="/#" onClick = {() => {this.props.setDestination(3)}} className ="btn btn-light moonBtn">Alien Base(1hr)</a>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Landing