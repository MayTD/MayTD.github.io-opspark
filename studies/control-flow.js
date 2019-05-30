/*
    CONTROL FLOW:
    
// 0. //
    the order in which the computer executes statements
    if/else-if/else and switch statements execute code if condition is true

*/

// 1. if statements //
// based on ranges of values or conditions
// if this condition is true, execute this code
    if (1 === 2) {
        console.log("1 = 2");   // prints 1 = 2 if 1===2 is true
    }

// 2. else if //
// if the above is false, but this is true, execute this code
    else if (1 === 3) {
        console. log("1 = 3");  // prints 1 = 3 if 1===3 is true
    }
// 3. else //
// if everything above is false, execute this code
    else {
        console.log("1 does not equal 2 or 3");  // prints 1 does not equal 2 or 3 if all else is false
    }

// 4. switch statements //
// selects one of the blocks to be executed based on a single value
// break keyword breaks out of the switch block to stop the exectution of inside the block
    var color = 'purple';
    switch (color) {
        case 'yellow':
            console.log('bee');         // prints bee if color is yellow
            break;
        case 'pink':
            console.log('pig');         // prints pig if color is pink
            break;
        case 'green':
            console.log('chameleon');   // prints chameleon if color is green
            break;
        // default is like an else statement- it runs if there's no case match
        default:
            console.log('elephant');    // prints elephant if all else is false
    }