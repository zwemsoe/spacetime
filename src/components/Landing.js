import React, {Component} from 'react';


class Landing extends Component{

    render(){
        return (
            <div>
                <div className = "introText">
                <p>Welcome, Astronaut! </p>
                <p>Where would you like to go today?</p>

                <div className= "row button-group">
                    <div className = "col">
                    <a href="#" className ="btn btn-light moonBtn">Moon(25mins)</a>
                    </div>
                    <div className = "col">
                    <a href="#" className ="btn btn-light moonBtn">Mars(45mins)</a>
                    </div>
                    <div className = "col">
                    <a href="#" className ="btn btn-light moonBtn">Alien Base(1hr)</a>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Landing