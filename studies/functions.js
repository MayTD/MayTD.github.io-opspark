/*
    FUNCTIONS:
    
// 0. //
    a block of code designed to perform a particular task when called
    values can be passed as parameters to use within the function 
    in javascript, functions always return a value. If no return value is specified, it will return undefined
    you can call a function by simply referencing the function name followed by (). arguments in () are not needed
*/


// 1. The two phases to using functions: First we must define? Next we can execute (or two other words for executing a function?) a function by calling it //

    function sayHello(greeting){        // function declaration
        console.log(greeting);          // prints Hello
    }
    sayHello("Hello");                  // function call             
    
    
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

    // function statement
    var result = print("May");
    
    // function expression
    // very similar to function statement, but function name can be omitted to create anonymous functions
    // can be used as a IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined
    var multiply = function(y) {
        return y * y;               // this value is stored into the variable, not the function definition
    };
    console.log(multiply(4));       // prints 16
    

// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?

    // specify output with return
    function add(x, y) {
        return x + y;
    }
    
    // specify input with arguents when calling the function
    console.log(add(3, 4));         // prints 7
    
    // if there are more parameters thans arguements, the missing values are set to undefined
    console.log(add(3));            // prints NaN since you can't add undefined and a number
    
    // if there are more arguments than parameters, the function will still take it since functions contain the arguments as an array like object
    function printArg() {
        console.log(arguments[0]);          // prints 1
        console.log(arguments[1]);          // prints 2
        console.log(arguments[2]);          // prints 3
    }
    printArg(1, 2, 3);


// 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.

    var a = "hello";
    function test2() {
        var b = "goodbye";      
        console.log(a);         // function has access to a
    }
    // console.log(b);          // this will throw a reference error since it has no access to b
    

// 7. Closures: where an inner function has access to the outer (enclosing) function’s variables
// the inner function has three scope chains:
// access to its own scope
// access to the outer function's variables
// access to any global variables

    // global
    var Person = function(pName){
        
        // outer 
        var name = pName;
        
        this.getName = function(){ 
            
            // inner (closure)
            return name;                    // accessing private variable
        };
    }
    
    var person = new Person("bob");
    console.log(person.getName());          // call to closure function. Prints bob 
    
   