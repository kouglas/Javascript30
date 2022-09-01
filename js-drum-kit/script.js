function playSound(e) {
     
        const audio = document.querySelector
        (`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector
        (`.key[data-key="${e.keyCode}"]`);
    
        if(!audio) return; // will stop the function all together
        audio.currentTime = 0; //will allow for the kbd to
        //be pressed consecutive times 
        audio.play();
        key.classList.add('playing');

}
function removeTransition(e) { 
    if(e.propertyName !== 'transform') return ; // skip if it's
    //not a transform
    
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);