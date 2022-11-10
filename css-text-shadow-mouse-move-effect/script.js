const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 100 // 100px

function shadow(e) {
    // get the width and height of the thing we
    // have hovered over
    // using destructuring 
    const { offsetWidth: width, offsetHeight: height} = hero
    // get information about where the user cursor was
    // using destructuring 
    let { offsetX: x, offsetY: y } = e
    // modify the offset values to reflect the values hovering
    // over the h1 vs the hero-div
    if(this !== e.target) {
    // this === to hero but the target is === to the h1
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
    }
    // how far the shadow should go
    // values rounded so their easier to read
    // when console logging
    const xWalk = Math.round((x / width * walk) - (walk / 2))
    const yWalk = Math.round(( y / height * walk) - (walk / 2))

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7)
    `
    console.log(xWalk, yWalk)
}

hero.addEventListener('mousemove', shadow)