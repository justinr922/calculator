let workingMemory = '0';
let savedMemory = '';
let storedOperator = '';
let display = document.querySelector('#display')
displayUpdate();



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
    storedOperator = '';
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

// Factorial functionality
const factorialButton = document.querySelector('#factorial');
factorialButton.addEventListener('click', () => {
    factorial();
    displayUpdate();
    workingMemory = '0';
})

// Operator functionality
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button => {
    button.addEventListener('click', () => {
        if ((storedOperator && savedMemory) || button.textContent == '='){
            operate(storedOperator);
            if (button.textContent == '=') {
                storedOperator = '';
            }
            displayUpdate();
        }



        saveInMemory();

        if (button.textContent != '=' || button.textContent != '!') {
            storedOperator = button.textContent;
            workingMemory = '0'
        }
    })  
}))

function operate(action) {
    let numSavedMemory = parseFloat(savedMemory);
    let numWorkingMemory = parseFloat(workingMemory);
    
    if (action == '') return
    else if (action == '+') {
        workingMemory = (numSavedMemory + numWorkingMemory).toString();
    } else if (action == '-') {
        workingMemory = (numSavedMemory - numWorkingMemory).toString();
    } else if (action == '*') {
        workingMemory = (numSavedMemory * numWorkingMemory).toString();
    } else if (action == '/') {
        if (numWorkingMemory === 0) {
            alert('Error. Divide by zero')
            return
        };
        workingMemory = (numSavedMemory / numWorkingMemory).toString();
    }
}

function factorial() {
    let numWorkingMemory = parseFloat(workingMemory);
    if (numWorkingMemory % 1 != 0) {
        alert('Error. Factorial only works on integers.')
        return
    } else if (numWorkingMemory < 0) {
        alert('Error. Factorial only works on non negatives.')
        return
    }

    if (numWorkingMemory == 0 || numWorkingMemory == 1) {
        workingMemory = '1';
    } else {
        for (let index = numWorkingMemory - 1; index > 1; index--) {
            numWorkingMemory = numWorkingMemory * index;
        }

        if (numWorkingMemory > 1e10) {
        workingMemory = numWorkingMemory.toExponential(6)
        } else {workingMemory = numWorkingMemory.toString()}
    }
}

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