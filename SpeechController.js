const synth = window.speechSynthesis;
const getVoiceList = () => {
  voices = synth.getVoices();
  return voices;
}

module.exports = {
  "getVoiceList": getVoiceList
}
