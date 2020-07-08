import React, {Component} from 'react';
import rocket from "../imgs/Rocket.svg";

class Rocket extends Component{
    constructor(props) {
        super(props);
        this.state = {
            x_pos: 3,
            y_pos: 5
        }
    }

    render(){
        return (
        <div>
            <img className = "rocket" src = {rocket} alt ="rocket here!"/>
        </div>
        )
    }

}

export default Rocket;