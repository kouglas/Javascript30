const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')
let lastHole;
let timeUp = false
let score = 0


function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

// pick a random hole for mole to pop
// up from 

function randomHole(holes){
    const idx = Math.floor(Math.random() * holes.length)
    const hole = holes[idx]
    if(hole === lastHole)  {
       return randomHole(holes)
    }
    // console.log(hole)


    lastHole = hole // will save the reference to which
    // one was called
    return hole
}

function show() {
    const time = randomTime(200, 1000)
    const hole = randomHole(holes)
    hole.classList.add('up')
    setTimeout(() => {
        hole.classList.remove('up')
        if(!timeUp) show()

    }, time)
    console.log(time, hole)
}

function startGame() {
    scoreBoard.textContent = 0 
    timeUp = false
    score = 0
    show()
    setTimeout(() => timeUp = true, 10000)

}

function smash(e) {
    if(!e.isTrusted) return; //fake click
    score++
    this.parentNode.classList.remove('up')
    scoreBoard.textContent = score
    console.log(e)

}

moles.forEach(mole => mole.addEventListener('click', smash))