var synth = window.speechSynthesis;
var pitch = "0.5";

function populateVoiceList(index) {
    var voices = synth.getVoices().filter(function(voice) {
        console.log('voice',voice);
        return voice.name === index;
      });
      return voices;
}

function getVoice(voiceName){
    var voices = synth.getVoices().filter(function(voice) {
        return voice.name === voiceName;
      });
      return voices;
}


function setPitch(index){
    pitch = index;
}

function getPitch(){
    return pitch;
}

function setVoice(index){
    var voices = synth.getVoices()[index];
}


function speak(text,index) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.volume = parseFloat(1);
    msg.rate = parseFloat(1);
    msg.pitch = parseFloat(1);
    msg.voice = getVoice();
    synth.speak(msg);
    msg.onend = function (event) {
        console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' milliseconds.');
    }
}


module.exports = {
    "populateVoice": populateVoiceList,
    "getPitch": getPitch,
    "speak": speak,
    "getVoice":getVoice,
    "setVoice":setVoice,
    "setPitch":setPitch
}