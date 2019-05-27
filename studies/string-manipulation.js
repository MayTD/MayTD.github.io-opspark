/*
    STRING MANIPULATION:

// 0. //
    useful operations with built-in methods to use on strings
*/

// 1. With operators //
    // .length: returns how mnay characters within a string contains
    var str1 = "Hello";
    console.log(str1.length);    // prints 5
    
    
// 2. With string methods //
    var str2 = "Eat My Hat";
    
    // toUpperCase(): convert the string to uppercase letters
    console.log(str2.toUpperCase());        // prints EAT MY HAT
    
    // to LowerCase(): converts the string to lowercase letters
    console.log(str2.toLowerCase());        // prints eat my hat
    
    // indexOf() and lastIndexOf(): finding a string within a string
    // return -1 if the text is not found
    // returns the first occurrence of specified text
    var str3 = "It's Not All It's Cracked Up To Be";
    var firstOcc = str3.indexOf("It's");
    console.log(firstOcc);                       // prints 0
    
    // returns last occurrence of specified text
    var lastOcc = str3.lastIndexOf("It's");
    console.log(lastOcc);                       // prints 13
    
    // split(): split a string into an array of substrings
    console.log(str3.split(" "));               // prints [ 'It\'s', 'Not', 'All', 'It\'s', 'Cracked', 'Up', 'To', 'Be' ]
    
    // trim(): removes whitespace from both sides of a string
    var str4 = "       triangle      ";
    console.log(str4.trim());                   // prints triangle
    
    // slice(): The slice() method returns the selected elements in an array, as a new array object
    // does not include end element
    var fruits = ["apple", "banana", "cherry", "dewberries"];
    console.log(fruits.slice(0, 3));            // prints [ 'apple', 'banana', 'cherry' ]
    