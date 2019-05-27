/*
    FUNCTIONS:
    
// 0. //
    a block of code designed to perform a particular task when called
*/

// 1. The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by? //
    // first define, then call to execute it
    
    
// 2. What’s the difference between a function’s parameters and arguments PASSED to a function?
    // paremeters are values that the function is taking in
    function test (parameter1, parameter2) {
        // do something
    }
    
    // arguments are values that are passed to the function being called
    test(1, 2);
    
    
// 3. What’s the syntax for a NAMED function? //
    // function keyword, followed by a name, followed by parentheses ()
    function print(name) {
        console.log(name);
    }
    

// 4. How do we assign a function to a variable?
    var result = print("May");
    

// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
    // specify output with return
    function add(x, y) {
        return x + y;
    }
    
    // specify input with arguents when calling the function
    add(3, 4);
    

// 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
    var a = "hello";
    function test2() {
        var b = "goodbye";      
        console.log(a);         // function has access to a
    }
    // console.log(b);          // this will throw a reference error since it has no access to b
    

// 7. Closures: Functions form closures around the data they house. 
// If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures!
    var count = (function () {          // variable count is assigned the return value of a self-invoking function
        var i = 0;                      // The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression
        return function () {
            i += 1;
            return i;
        }
    })();
    
    count();            // i is now 1
    count();            // i is now 2
    // count becomes a function that holds private variable i
    // The counter is protected by the scope of the anonymous function, and can only be changed using the add function