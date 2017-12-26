var synth = window.speechSynthesis;
function populateVoiceList() {
    voices = synth.getVoices();
    return voices;
}


module.exports = {
    "populateVoice": populateVoiceList
}