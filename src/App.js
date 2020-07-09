import React, {Component} from 'react';
//import {Howl, Howler} from 'howler';
//import test from "./test.mp3";
//import wtf from "./WTF.mp3";
import earth from "./imgs/earth.svg";
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
      page:0
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
          <div className = "introPos">
            <h1>Ready?</h1>
            <a onClick = {()=>this.clearScreen()} className ="btn btn-light moonBtn">Yes</a>
            <a onClick = {()=>this.goToLanding()()} className ="btn btn-light moonBtn">Cancel</a> 
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
        return <Rocket destination = {this.state.destination}/>
        }
        return (<Rocket destination={0}/>);
      case 2:
        break;
      default:
        break;
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
