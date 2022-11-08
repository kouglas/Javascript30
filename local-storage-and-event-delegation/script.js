const items = JSON.parse(localStorage.getItem('items')) || []
const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')

function addNewItem(e) {
    // stop the page from reloading
    e.preventDefault()
    // get the text from the item object below
    // by selecting the form and the "name" attribute of "item"
    const text = (this.querySelector('[name=item]')).value

    // take the text input from the box and put it in an object
    const item = {
        text,
        done: false,
    }
    //take the item and put it in the items [] array
    items.push(item)
    populateList(items, itemsList)
    localStorage.setItem('items', JSON.stringify(items))
    //clear the input in the search bar
    this.reset()
    // console.log(item)
}
// grab the list of items and dictate where they will go
// in the html
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, index) => {
        return `
            <li>

                <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : ''} />
                <label for="item${index}">${plate.text}</label>
            </li>
        
        
        `
        // take all the items from .map and turn into one big string
    }).join('') 
}

// this will check if we are matching the click that we want
function toggleDone(e) {
    if(!e.target.matches('input')) return // skip this unless it's an input 
    const el = e.target
    const index = el.dataset.index
    items[index].done = !items[index].done //changes done value from false to true
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
}

addItems.addEventListener('submit', addNewItem)
// listen for a click on the unordered list

itemsList.addEventListener('click', toggleDone)
populateList(items, itemsList)