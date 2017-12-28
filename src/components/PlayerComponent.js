import React, { Component } from 'react';
import CaptionComponent from './CaptionComponent';
var ntext = ["2017 belonged to AI, blockchain which has made many biting their fingers both with excitement & opportunity.",
"Tech industries have continued to expand & evolved at an unbelievable pace and will continue to do so in 2018. ",
"Sectors all poised to rule 2018 will be Blockchain based Cryptos will be widely accepted within financial sectors and insurance sectors as a mode of transactions for their consumer based services",
"Robots will partner with humans to augment their intelligence & help them function efficiently",
"With high speed internet network and 4K HD contents, mobile phone is a new TV for online users"]


let count = 0;
class PlayerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            count: 0,
            text: "",

        }

        this.speak = this.speak.bind(this);
        this.start = this.start.bind(this);

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

    stop(){
        speechSynthesis.cancel();
    }

    play(){
        speechSynthesis.resume()
    }

    render() {
        return (
            <div>
            <div className="row">
                <div className="col-md-3">
                <button className="btn btn-success" onClick={this.start.bind(this)}>Speak</button>
                </div>
                <div className="col-md-3">
                <button className="btn btn-success" onClick={this.stop}>Stop</button>
                </div>
                <div className="col-md-3">
                <button className="btn btn-success" onClick={this.play}>Resume</button>
            </div>
            </div>

               <div className="container">
                <h6>{this.state.text}</h6>
             
            </div>
            </div>
        )
    }

}


export default PlayerComponent;
