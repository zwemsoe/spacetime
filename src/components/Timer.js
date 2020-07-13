import React, { Component} from 'react';
import spaceman from "../imgs/spaceman.svg";
import ProgressBar from "./ProgressBar";

export default class Timer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            minutes: this.props.time,
            seconds: 0,
            progress: 0
        }
    }
   
    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes, progress } = this.state
            const {time} = this.props;
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1,
                    progress: progress+ (100/(time*60))
                }));
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval);
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }));
                }
            } 
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }


    renderResults(param){
        switch(param){
            case 25:
                return (
                <div>
                    <div className="finishText">
                            <h3 className="introText">Congrats! You reached your goal! </h3>
                            <a href="/#" onClick={()=>this.props.goBack()} className="btn btn-light moonBtn">Start Another</a>
                    </div>
                    <img src= {spaceman} className="spaceman" alt="spaceman here!"/>
                </div>
                );
            case 45:
                return (
                <div>
                    <div className="finishText">
                            <h3 className="introText">Congrats! You reached your goal! </h3>
                            <a href="/#" onClick={()=>this.props.goBack()} className="btn btn-light moonBtn">Start Another</a>
                        </div>
                    <img src= {spaceman} className="spaceman" alt="spaceman here!"/>
                </div>
                    );
            case 60:
                return (
                <div>
                        <div className="finishText">
                            <h3 className="introText">Congrats! You reached your goal! </h3>
                            <a href="/#" onClick={()=>this.props.goBack()} className="btn btn-light moonBtn">Start Another</a>
                        </div>
                    <img src= {spaceman} className="spaceman" alt="spaceman here!"/>
                </div>
                );
            default:
                return (
                    <div>
                        <div className="finishText">
                            <h3 className="introText">Congrats! You reached your goal! </h3>
                            <a href="/#" onClick={()=>this.props.goBack()} className="btn btn-light moonBtn margin-top">Start Another</a>
                        </div>

                        <img src= {spaceman} className="spaceman" alt="spaceman here!"/>
                    </div>
                    );
        }
    }
    render() {
        const { minutes, seconds, progress } = this.state;
        const {time} = this.props;
        return (
            <div>
                { minutes === 0 && seconds === 0
                    ? <div>{this.renderResults(time)}</div>
                    : 
                    <div>
                   { console.log(progress)}
                    {(progress <= 100) && (<ProgressBar completed={progress}/>)}
                    <p className = "time-remaining">Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
                    
                    <div className="Give-Up-Text">
                            <h3 className=""introText> Give Up? </h3>
                            <a href="/#" onClick={()=>this.props.goBack()} className="btn btn-light moonBtn margin-top">Yes</a>
                    </div>

                    
                    </div>
                }
            </div>
        )
    }
}