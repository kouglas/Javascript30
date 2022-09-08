const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    // check if they had the shift key down
    // AND check that they are checking it
    
        // continue
        //going to loop through every single
        //check box. will look for the first one
        //that was checked and go to the next one
        //and the one after and check them
        //then stopping at the last one
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked ) {
                inBetween = !inBetween;
                console.log('starting to check inbetwen')
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        })


    }
    lastChecked = this;
    console.log(e)
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
