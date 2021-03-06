import React, {Component} from 'react';
import earth from "./imgs/earth.svg";
import moon from "./imgs/Moon.svg";
import mars from "./imgs/mars.svg";
import exoplanet from "./imgs/exoplanet.svg";
import Landing from "./components/Landing";
import Rocket from "./components/Rocket";
import Quote from "./components/DisplayQuotes";
import Timer from "./components/Timer";
import moon_orbit from "./imgs/Moon_Orbit.svg";
import satellite from "./imgs/Satellite_Orbit2.svg";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      page: 0,
      destination: 0,
      readyClicked : false
    }
    this.setDestination = this.setDestination.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.goToLanding = this.goToLanding.bind(this);
  }

  setDestination(param){
    this.setState({
      page: 1,
      destination: param
    })
  }

  clearScreen(){
    this.setState({
      page: 2,
      readyClicked: true
      })
  }

  goToLanding(){
    this.setState({
      page:0,
      destination: 0,
      readyClicked : false
    })
  }

  renderPage(page){
    switch(page){
      case 0:
        console.log("reached inside case 0! ")
        return (
        <div>
        <div className = "introPos">
        <Landing setDestination = {this.setDestination}/>
        </div>
        </div>
        )
      case 1:
        return(
          <div>
          <div className = "readyPos">
            <h1 className = "readyText">Are you ready?</h1>
            <div className="row">
            <div className="col">
            <a href="/#" onClick = {()=>this.clearScreen()} className ="btn btn-light moonBtn">Yes</a>
            </div>
            <div className="col">
            <a href="/#" onClick = {()=>this.goToLanding()} className ="btn btn-light moonBtn">Cancel</a> 
            </div>
            </div>
         </div>
          </div>
        );

      default:
        return (<div></div>);
    }
  }

  renderRocket(param){
    switch(param){
      case 0:
        return (
        <div>
          <Rocket destination={0}/>
          <img src = {satellite} className="satellite" alt = "satellite here!"/>
        </div>
        );
      case 1:
        if(this.state.readyClicked){
        return (
        <div>
        <Timer time={25} goBack={this.goToLanding}/>
        <Rocket destination = {this.state.destination}/>
        <Quote id = {Math.floor(Math.random()*23)}/>
        <div>
          <img src = {moon} className="moon" alt = "Moon here!"/>
        </div>
        <div>
          <img src = {satellite} className="satellite" alt = "satellite here!"/>
        </div>
        </div>
        )
        }
        return (<Rocket destination={0}/>);
      case 2:
        if(this.state.readyClicked){
          return (
          <div>
          <Timer time={45} goBack={this.goToLanding}/>
          <Rocket destination = {this.state.destination}/>
          <Quote id = {Math.floor(Math.random()*23)}/>
          <div>
            <img src = {mars} className="mars" alt = "Mars here!"/>
          </div>
          <div>
          <img src = {moon_orbit} className="moon_orbit" alt = "Moon_orbit here!"/>
          </div>
          <img src = {satellite} className="satellite" alt = "satellite here!"/>
          </div>
          )
          }
          return (<Rocket destination={0}/>);
      default:
        if(this.state.readyClicked){
          return (
          <div>
          <Timer time={60} goBack={this.goToLanding}/>
          <Rocket destination = {this.state.destination}/>
          <Quote id = {Math.floor(Math.random()*23)}/>
          <div>
            <img src = {exoplanet} className="exoplanet" alt = "Exoplanet here!"/>
          </div>
          <div>
          <img src = {moon_orbit} className="moon_orbit" alt = "Moon_orbit here!"/>
          </div>
          <div>
            <img src = {mars} className="mars_for_alien" alt = "Mars here!"/>
          </div>
          <img src = {satellite} className="satellite" alt = "satellite here!"/>
          </div>
          )
          }
          return (<Rocket destination={0}/>);
    }
  }

  render(){
    const {page, destination} = this.state;
    console.log("page = "+ page);
    console.log("destination: " + destination);
    return(
    <div>
      <p className="brand">SpaceTime</p>
      <img src = {earth} alt = "earth here!" className = "earth"/>
      {this.renderRocket(destination)}
      {this.renderPage(page)}
    
      <iframe className="spotify" src="https://open.spotify.com/embed/playlist/0mBI5RZLjxfv7ZCunuLQdG" width="300" height="180" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>    </div>
    )
  }


  
}

export default App;
