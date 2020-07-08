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


  render(){
    return(
    <div className = "bg">
      <img src = {earth} alt = "earth here!" className = "earth"/>
      <Rocket/>
      <div className = "introPos">
        <Landing/>
      </div>
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
