// get all things that will be hovered over that need to be highlighted over
const triggers = document.querySelectorAll('a')


// highlighter functions
// when you hover it'll figure out width, height,
// and position on page the item is

// create the span where the highlight will
// be generated
const highlight = document.createElement('span')
// give the span a class so it can be manipulated
highlight.classList.add('highlight')
// add the highlight class to the document (html) body
document.body.append(highlight)

// listen for when users enters link space 
function highlightLink(){
    //how big is element that was hovered 
  const linkCoords = this.getBoundingClientRect()
    console.log(linkCoords)
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }
    // where on the page is actual element
    highlight.style.width = `${coords.width}px`
    highlight.style.height = `${coords.height}px`
    highlight.style.transform = `translate(${coords.left}px, ${linkCoords.top}px)`
}
// select all anchor tags, iterate over each tag 
// returning a tag with a mouseenter event listener
// and the highlightLink function 
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))
