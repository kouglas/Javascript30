const bands = ['The Plot in You', 'The Devil Wears Prada',
             'Pierce the Veil', 'Norma Jean', 
             'The Bled', 'Say Anything', 
             'The Midway State', 'We Came as Romans', 
             'Counterparts', 'Oh, Sleeper', 
             'A Skylit Drive', 'Anywhere But Here', 
             'An Old Dog'];


function removeArticles(bandName) {

    //this will replace the selected articles with 
    // nothing and then trim at the end will removes 
    // unneeded spaces
    return bandName.replace(/^(a |the |an )/i, '').trim()
}

const sortedBands = bands.sort((a, b) => removeArticles(a) > removeArticles(b) ? 1 : -1)


//display the array into the DOM
document.querySelector('#bands').innerHTML = 
    sortedBands
        //maps over the new array sortedBands
        .map(band => `<li>${band}</li>`)
        // remove the commas from the array 
        .join('')

console.log(sortedBands)