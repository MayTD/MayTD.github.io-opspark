/*
    DATATYPES:
    
// 0. //
    A variable can contain any data. The type of data determines its role. It could be a number,
    a piece of text, a function, and so on.
    
    Javacript Types are Dynamic:
    the value of the variable can be changed
    var x;          -> undefined
    x = 5;          -> x is now a number
    x = "Hello";    -> x is now a string
*/


// 1. numbers //
// JS does not have different types of numbers like int, short, long, float, etc.
// adding a string and a number or number and a string will resilt in string concatenation
    var num1 = 3;           // whole number
    var num2 = 3.15;        // with decimals, the max num of decimals is 17
    var num3 = 123e5;       // 12300000
    var num4 = 123e-5;      // 0.00123
    
// 2. strings //
// a series of characters
// string indexes are zero-based
    var str1 = 'Hello';     // single quote
    var str2 = "World";     // double quote
    var str3 = str1 + 3;    // Hello3 since first operand is a string, all operands are treated as strings
    var str4 = 4 + str2;    // 4World
    
// 3. boolean //
// True or False values used for conditional testing
    var x = 5;
    var y = 6;
    console.log(x < y);     // prints true 
    console.log(x > y);     // prints false
    
// 4. array //
// stores multiple values in a single variable
    var arr = [0, 1, 2];
    
// 5. object //
// name:value pairs
    var obj = {
        firstName: 'may',
        age: 19
    };
    
// 6. function //
// block of code that performs a particular task when called
    function sum(num1, num2){   // function name is sum and it takes two parameters 
        return num1 + num2;
    }
    
    sum(1, 2);                  // calling function, return value is 3
    
// 7. undefined //
// indicates that a variable has not been assigned
    var j;
    console.log(j);         // prints undefined
    
// 8. null //
// empty or non-existent object value
    var test = null;
    console.log(test);      // prints null;
    
// 9. NaN //
// not a number
// isNan() is used to determine whether a value is NaN
    isNaN('Hello');     // true
    
// 10. Infinity and -Infinity //
// numeric expressions for positive infinity and negative infinity
    
    // Infinity is a variable in global scope
    // it behaves like mathematical infinity
    console.log(Infinity + 1);      // any number added or multiplied by infinity equals infinity
    console.log(1 / Infinity);      // any number divided by Infinity equals 0
    
    // -Infinity (Number.NEGATIVE_INFINITY) is the negative value of Infinity
    // behaves like mathematical -infinity
    console.log(Number.NEGATIVE_INFINITY + 1);      // any number added or subtracted to -Infinity equals -Infinity
    console.log(Number.NEGATIVE_INFINITY * 5);      // -Infinity * or / positive equals -Infinity
    console.log(Number.NEGATIVE_INFINITY * -5);     // -Infinity * or / negative equals Infinity


// 11. Difference between simple/primitive and complex data types
    
    // Simple/Primitive: immutable and copy by value
    // number      -> 1, 12, 5.7
    // string      -> "Hello World!"
    // boolean     -> true or false
    // NaN         -> not a number
    // undefined   -> an undefined number

    // Complex: indefinite size and copy by reference
    // object      -> {name: "may", age: 19}
    // array       -> [1, 2, 3]
    // function    -> function print(){}
    
// 12. Difference between passing by value and passing by reference //
        
    // copied by value
    var a = 1;
    var b = a;          // value stored in a is copied into b
    b = 2;              // changing value at b doesn't affect a
    console.log(a);     // prints 1
    console.log(b);     // prints 2
    
    // copied by reference
    var a = {name: 'may'};
    var b = a;              // they both now point to same object
    b.name = 'Momo';        // both references will have name = 'momo'
    console.log(a.name);    // prints momo
    console.log(b.name);    // prints momo
    