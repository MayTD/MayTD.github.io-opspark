/*
    CONTROL FLOW:
    
// 0. //
    the order in which the computer executes statements
    if/else-if/else and switch statements execute code if condition is true

*/

// 1. if statements //
    if (1 === 2) {
        console.log("1 = 2");
    }

// 2. else if //
    else if (1 === 3) {
        console. log("1 = 3");
    }
// 3. else //
    else {
        console.log("1 does not equal 2 or 3");
    }

// 4. switch statements //
    var color = 'purple';
    switch (color) {
        case 'yellow':
            console.log('bee');
            break;
        case 'pink':
            console.log('pig');
            break;
        case 'green':
            console.log('chameleon');
            break;
        default:
            console.log('elephant');
    }