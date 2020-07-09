import React, {Component} from 'react';
//import {Howl, Howler} from 'howler';
//import test from "./test.mp3";
//import wtf from "./WTF.mp3";
import earth from "./imgs/earth.svg";
import moon from "./imgs/Moon.svg";
import mars from "./imgs/mars.svg";
import exoplanet from "./imgs/exoplanet.svg";
import Landing from "./components/Landing";
import Rocket from "./components/Rocket";
/*
const clips = [
  {
    sound: "https://soundcloud.com/tymedia17/shadow-free-download", label: "test"
  },
  {
    sound: wtf, label: "wtf"
  }
]
*/
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
      destination: 0
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
            <a onClick = {()=>this.clearScreen()} className ="btn btn-light moonBtn">Yes</a>
            </div>
            <div className="col">
            <a onClick = {()=>this.goToLanding()} className ="btn btn-light moonBtn">Cancel</a> 
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
        return (<Rocket destination={0}/>);
      case 1:
        if(this.state.readyClicked){
        return (
        <div>
        <Rocket destination = {this.state.destination}/>
        <div>
          <img src = {moon} className="moon" alt = "Moon here!"/>
        </div>
        </div>
        )
        }
        return (<Rocket destination={0}/>);
      case 2:
        if(this.state.readyClicked){
          return (
          <div>
          <Rocket destination = {this.state.destination}/>
          <div>
            <img src = {mars} className="mars" alt = "Mars here!"/>
          </div>
          </div>
          )
          }
          return (<Rocket destination={0}/>);
      default:
        if(this.state.readyClicked){
          return (
          <div>
          <Rocket destination = {this.state.destination}/>
          <div>
            <img src = {exoplanet} className="exoplanet" alt = "Exoplanet here!"/>
          </div>
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
      <img src = {earth} alt = "earth here!" className = "earth"/>
      {this.renderRocket(destination)}
      {this.renderPage(page)}
    </div>
    )
  }


  /*
  playSound = (src) => {
    const sound = new Howl({
      src,
    })
    sound.play();
  }

  RenderButton = ()=> {
    return clips.map((song,index)=>{
    return (
    <button onClick={() => this.playSound(song.sound)}>
          {song.label}
    </button>
    )}
    )
  }

  render(){
    Howler.volume(1.0);
    return <div className="App">Hello, {this.RenderButton()}</div>;
  }
  */
}

export default App;
