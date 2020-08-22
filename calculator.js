let workingMemory = '0';
let savedMemory = '';
let memoryOperator = '';
let display = document.querySelector('#display')


const numberButtons = document.querySelectorAll('.number')
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        updateCurrentMemory(button);
        displayUpdate();
    })
})

const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', () => {
    workingMemory = '0';
    savedMemory =  '';
    memoryOperator = '';
    displayUpdate();
})

function updateCurrentMemory(button) {
    let classes = button.classList;
    if (workingMemory == '0' && button.textContent != '.') {
        workingMemory = button.textContent
    } else if (!(workingMemory.indexOf('.') != -1 && button.textContent == '.')) {
        workingMemory += button.textContent
    }
}

function saveInMemory() {
    savedMemory = workingMemory;
}


function displayUpdate() {
    display.value = workingMemory;
}