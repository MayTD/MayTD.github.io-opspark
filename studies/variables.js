/*
    VARIABLES:
 
 // 0.//
    To hold things in memory during the life-cycle of a program, we can use variables.  Variables
    are named identifiers that can point to values of a particular type, like a Number, String,
    Boolean, Array, Object or another data-type.  Variables are called so because once created, we
    can CHANGE the value (and type of value) to which they point.
    
    1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
    variable.
 
    2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration and assignment //
    var myName;             // this is declaring a variable called myName
    myName = "may";         // myName is assigned to the string 'may'
    console.log(myName);    // prints may
    
    myName = "1";           // variables can be reassigned. It can be reassigned with a different datatype
    console.log(myName);    // prints 1
    
// 2. var, let, const //
// 3. hoisting //
// These are keywords that declares a variable. Each functions similarly, but differently when it comes to scopes
// Scopes refer to what variables are accessible where
// Global variable has global scope which means it can be defined anywhere
// Local variables have local scope which means it is only visible within the function its defined in

    // var declarations are hoisted(processed before any code is executed) but,
    // the scope of var is its current execution context.
    function test() {
        x = 1;
        var z = 2;
    }
    var x;
    console.log(x);     // this will print 1 since x is hoisted
    // console.log(z);     // throws reference error since z is not defined outside test
    
    
    // let statement declares a block scope local variable
    let a = 1;
    function test2() {
        let a = 2;              // different variable. a in this block is not the same a declared outside
        console.log(a);         // prints 2
    }
    test2();
    console.log(a);             // prints 1
    
    
    // const behave like let variables with block scopes, but cannot be reassigned
    // const objects and array can be changed, not reassigned
    // must be assigned when declared
    const PI = 3.14;
    // PI = 'Hello';        // this will give an error
    
    const apple = {color: "red", taste: "sweet"};
    // car = {color: "green", taste: "sour"};       // throws an error
    apple.size = "small";                           // this will add a new key/value in apple object
    
    const colors = ["blue", "yellow"];
    // colors = ['purple'];                 // throws error
    colors[1] = "purple";                   // changes yellow to purple
    console.log(colors);                    // prints ['blue', 'purple']
    
    