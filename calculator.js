let workingMemory = '0';
let savedMemory = '';
let memoryOperator = '';
let display = document.querySelector('#display')



//Numerical button functionality
const numberButtons = document.querySelectorAll('.number')
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        updateCurrentMemory(button);
        displayUpdate();
    })
})


// Clear Button Functionality
const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', () => {
    workingMemory = '0';
    savedMemory =  '';
    memoryOperator = '';
    displayUpdate();
})

// Modifier button functionalities
const modifierButtons = document.querySelectorAll('.modifyer')
modifierButtons.forEach((button) => {
    button.addEventListener('click', function() {
        modifyWorkingMemory(button);
        displayUpdate();
    })
})

function updateCurrentMemory(button) {
    let classes = button.classList;
    if (workingMemory == '0' && button.textContent != '.') {
        workingMemory = button.textContent
    } else if (!(workingMemory.indexOf('.') != -1 && button.textContent == '.')) {
        workingMemory += button.textContent
    }
}

function modifyWorkingMemory(button) {
    if (button.textContent == '%') {
        let numericalRep = parseFloat(workingMemory)
        numericalRep /= 100;
        workingMemory = numericalRep.toString()
    } else if (button.textContent == '+/-') {
        if (workingMemory == '0') return
        
        if (workingMemory.split('')[0] == '-') {
            workingMemory = workingMemory.substring(1);
        } else {workingMemory = '-' + workingMemory;}
    }
}

function saveInMemory() {
    savedMemory = workingMemory;
}


function displayUpdate() {
    display.value = workingMemory;
}