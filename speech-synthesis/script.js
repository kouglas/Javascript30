const msg = new SpeechSynthesisUtterance()
// how fast
// what pitch 
// what voice 
// what will be said
let voices = []
const voicesDropdown = document.querySelector('[name = "voice')
const options = document.querySelectorAll('[type = "range"], [name = "text"]')
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')
msg.text = document.querySelector('[name = "text"]').value 

function populateVoices(){
    voices  = this.getVoices()
    voicesDropdown.innerHTML = voices.filter(voice => voice.lang.includes('en'))
      .map(voice => `<option value="${voice.name}"> ${voice.name} (${voice.lang}) </option>`)
      .join('')
        
    console.log(voices)
}

function setVoice(){
    msg.voice = voices.find(voice => voice.name === this.value)
    console.log('changing voice')
}
// restarts the speech function 
function toggle(startOver = true){
    speechSynthesis.cancel()
    if(startOver){
      speechSynthesis.speak(msg)
    }

    console.log('isToggled chile')
}

function setOption(){
    console.log(this.name, this.value)
    msg[this.name] = this.value
    toggle()
}
speechSynthesis.addEventListener('voiceschanged', populateVoices)
voicesDropdown.addEventListener('change', setVoice)
options.forEach(option => option.addEventListener('change', setOption))
speakButton.addEventListener('click', toggle)
stopButton.addEventListener('click', () => toggle(false) )