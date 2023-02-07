// const sayHi = () => {
//     console.log('hey batcj')
// }

// sayHi()

const divs = document.querySelectorAll('div')

function logText(e){
    // e.stopPropagation() // stop bubbling
    console.log(this.classList.value)
}
document.body.addEventListener('click', logText)

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true // makes something run once
}))