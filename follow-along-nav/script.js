const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelectorAll('.dropdownBackground')
const nav = document.querySelectorAll('.top')

function handleEnter(){
    console.log('enter')
}

function handleLeave(){
    console.log('leave')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))