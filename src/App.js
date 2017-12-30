import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import AppStore from './store/AppStore';
import CaptionComponent from '../src/components/CaptionComponent';
import SideBar from '../src/components/SideBar';
import Main from '../src/components/Main';
import InstaComponent from '../src/components/InstaComponent';


var ntext = ["2017 belonged to AI, blockchain which has made many biting their fingers both with excitement & opportunity.",
  "Tech industries have continued to expand & evolved at an unbelievable pace and will continue to do so in 2018. ",
  "Sectors all poised to rule 2018 will be Blockchain based Cryptos will be widely accepted within financial sectors and insurance sectors as a mode of transactions for their consumer based services",
  "Robots will partner with humans to augment their intelligence & help them function efficiently",
  "With high speed internet network and 4K HD contents, mobile phone is a new TV for online users"]


let count = 0;
class App extends Component {

  constructor(props) {
    super(props);
   
    this.state = {
      value: 0,
      count: 0,
      text: "",
      caption: "One thing to note is that the React documentation makes use of arrow"
    }
    this.narate = this.narate.bind(this);
    this.speak = this.speak.bind(this);
    this.start = this.start.bind(this);
    this.callEvent = this.callEvent.bind(this);

  }


  narate() {
    console.log("updated");
    this.setState({
      text: this.state.value + 1
    })
  }

  getDigit(index) {
    return ntext[index];
  }

  componentWillMount() {
      this.setState({
        "text":"Narration text goes here!"
      })
  }

  updateState(value) {
    console.log('calling update')
    this.setState({
      "text": value
    })
  }

  speak(text) {
    if (text.length) {
      var utterThis = new SpeechSynthesisUtterance();
      utterThis.text = text[0];
      utterThis.onstart = function (uttr) {
        console.log('speech started!');
      }

      utterThis.addEventListener('end', function (e) {
        console.log('speech ended!')
        setTimeout(() => {
          this.updateState(text[1]);
          this.speak(text.slice(1));
        }, 1000);
      }.bind(this));
      utterThis.voice = speechSynthesis.getVoices()[0];
      utterThis.pitch = parseFloat(1.5);
      utterThis.rate = parseFloat(1);
      utterThis.volume = parseFloat(1);
      speechSynthesis.speak(utterThis);
    }
  }

  start() {
    this.speak(ntext)
    this.updateState(ntext[0]);
  }


  callEvent(ename,ac){
    console.log('e',ename);
   // console.log(ac)
    AppStore.dispatchEvent(ename);
    AppStore.getValue().then(value=>{
      console.log(value);
    })
  }

  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: 30 }}>
          <div className="row">
            <div className="col-md-3">
              <SideBar />
              <button className="btn btn-success" onClick={this.start.bind(this)}>Speak</button>
                <button className="btn btn-success" onClick={this.stop}>Stop</button>
                <button className="btn btn-success" onClick={this.play}>Resume</button>
                <button className="btn btn-success" onClick={this.callEvent.bind(this,'ADD')}>ADD</button>
                <button className="btn btn-success" onClick={this.callEvent.bind(this,'MULTIPLY')}>MULTIPLY</button>
                <button className="btn btn-success" onClick={this.callEvent.bind(this,'SUBTRACT')}>SUBTRACT</button>
               </div>
            <div className="col-md-8">
              <Main />
            </div>
          </div>
        </div>
      {/* <CaptionComponent narration = {this.state.text} /> */}
      <InstaComponent narration = {this.state.text}/>
      </div>
    );
  }
}

export default App;
