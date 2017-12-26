import React, { Component } from 'react';
import SpeechController from '../components/SpeechController';
import DropdownComponent from '../components/DropdownComponent';
import SpeechSynthesis from '../components/SpeechSynthesis';
function speak(){
  console.log("Speak");
  SpeechController.speak("Hello");
}

function getVoice(){
  console.log("Speak");
  SpeechController.setVoice(2);
  let z = SpeechController.getVoice(0);
  let y = SpeechController.getPitch();
  console.log('voice',y);
}



class SpeechComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      "speech":[],
      "pitch":"",
      "voice":[]
    }
  }

  componentWillMount(){
    this.setState({
      "speech":SpeechController.populateVoice('Fiona'),
      "pitch":SpeechController.getPitch()
    })

    console.log('Component will mount',this.state.pitch);
  }

  componentDidMount(){
    this.setState({
      "pitch":SpeechController.getPitch()
    })
    console.log('Did mount',this.state.pitch);
    console.log('Component will mount',this.state.speech);
    SpeechController.setPitch(0.3);
  }

   populate(){
    console.log("populate");
    var u = SpeechController.populateVoice('Google UK English Female');
    this.setState({
        "voice":""
    })
    console.log('voice',u);
  }
  

  render(){
    return(
      <div>
      <p>SpeechComponent</p>
      <button className="btn btn-primary" onClick={speak.bind(this)}>Speak</button>
      <button className="btn btn-primary" onClick={getVoice.bind(this)}>Get Voice</button>
      <button className="btn btn-primary" onClick={this.populate.bind(this)}>Populate</button>
      <DropdownComponent option = {this.state.speech}/>
      </div>
    )
  }
}
export default SpeechComponent