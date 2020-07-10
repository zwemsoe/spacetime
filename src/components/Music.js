import React, {Component} from 'react';
import {Howl} from 'howler';
import inag from "../songs/INAG.mp3"
import tokyo from "../songs/Tokyo.mp3";
import pearl from "../songs/Pearl.mp3";
import wis from "../songs/WIS.mp3";
/*
const clips = [
    {
        sound: tokyo, label: "lofi-1"
    },
    {
        sound: inag, label: "lofi-2"
    },
    {
        sound: pearl, label: "lofi-3"
    },
    {
        sound: wis, label: "lofi-4"
    }
  ]
 */
let sound = new Howl({
    src: [pearl,tokyo,wis,inag],
    autoplay: false,
    loop: true,
    volume:0.5
  })
class Music extends Component {

constructor(props) {
        super(props);
        this.state={
            sound: sound,
            onPlay: false
        }
    }
  playSound() {
    sound.play();
    this.setState({
        onPlay: true
    })
  }

  pauseSound() {
    sound.pause();
    this.setState({
        onPlay: false
    })
    }

  render(){
      const {onPlay} = this.state;
    return (
    <div>
    <div className="row music-player">
    <div className="col">
    <a className= "play" onClick={()=>{!onPlay && this.playSound()}}>
        <i class="fa fa-play-circle fa-4x playIcon" aria-hidden="true"></i>
    </a>
    </div>
    <div className="col">
    <a className= "pause" onClick={()=>{this.pauseSound()}}>
        <i class="fa fa-pause-circle fa-4x pauseIcon" aria-hidden="true"></i>
    </a>
    </div>
    </div>
    </div>
    );
  }

}

export default Music;