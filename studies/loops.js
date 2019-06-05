/*
    LOOPS:
    
// 0. //
    Loops are build-in constructs that allow us to execute a block of code as many times as needed.
    Handy, if you want to run the same code over and over again, each time with a different value.
    These are some of the different types of loops: 
    
    for:repeats until a specified condition evaluates to false
    for ([initialExpression]; [condition]; [incrementExpression]) {
        statements
    }
    
    for-in: iterates a specified variable over all the enumerable properties of an object. For each distinct property, executes the specified statements
    for (variable in object) {
        statements
    }
    
    while: executes its statements as long as a specified condition evaluates to true
    while (condition) {
        statements
    }
*/
    
// 1. while, for, and for-in loops //
    
    // while loops
    // executes code as long as condition is true
    // this is better to use than for loops when condition is not based on a certain number ex. boolean
    var count;
    while (count <= 5) {
        console.log(count);         // prints 1-5
        count++;                    // increment count so that count will reach 5 to avoid infinite loop
    }
    
    // for loops
    // runs a block of code a certain amount of time
    //(initialization; condition; increment/decrement)
    for (var i = 0; i <= 5; i++) {
        console.log(i);                 // prints 1-5
    }
    
    // for-in loops
    // loops through the properties of an object
    var person = {
        firstName: 'may',
        lastName: 'do',
        age: 19
    };
    
    for (var key in person) {
        console.log(person[key]);      // prints may\ndo\n19
    }

// 2. Loop any number of times, forward counting up to some limit, backward counting down to 0
// 3. Looping over Arrays //
    var arr = [0, 1, 2, 3, 4, 5, 6, 7];
    
    // any number of times and forward counting
    for (i = 0; i < 7; i++) {       // starts in index 2 and ends at index 6
        console.log(arr[i]);        //prints 2, 3, 4, 5
    }
    
    // backwards counting
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
    
// 4. Looping over Objects //
    var obj = {
        key1: 1,
        key2: 2,
        key3: 3
    };
    
    for (var key in obj) {
        console.log(key);                   // prints all key name
        console.log(obj[key]);              // prints properties of key
        console.log(key + ' ' + obj[key]);  // prints key and key value
    }