import React, {Component} from 'react';
import rocket from "../imgs/fullrocket.svg";

class Rocket extends Component{
    constructor(props) {
        super(props);
        this.state = {
            styles: ["rocket", "rocket-to-moon", "rocket-to-mars", "rocket-to-alien"]
        }
    }

    render(){
        console.log("reached to rocket");
        const {styles} = this.state;
        return (
        <div>
        
        <img className = {styles[this.props.destination]} src = {rocket} alt ="rocket here!"/>
        </div>
        )
    }

}

export default Rocket;