/*
    STRING MANIPULATION:

// 0. //
    strings are sequences of characters that can be accessed by index
    useful operations with built-in methods to use on strings
    when you create a string, is becomes a string object instance which means it has a large number of properties and methods to it
    
*/

// 1. With operators //
    // joining multiple strings together is known as concatenation
    // concatenation operator (+), (+=) reassigns the concatenated string
    var str1 = "Hello";
    str1 += " there";
    console.log(str1);      // prints hello there
    
    
// 2. With string methods //
    var str2 = "Eat My Hat";
    
    // string length: return the length of the string
    console.log(str2.length);              // prints 10
    
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
    
    // concat(): concatenates the string arguments to the calling string and returns a new string
    var str5 = "Purple";
    var str6 = "Pasta";
    console.log(str5.concat(' ', str6));        // prints Purple Pasta. note ' ' is a string
    
    // slice(): The slice() method returns the selected elements in an array, as a new array object
    // does not include end element
    var fruits = ["apple", "banana", "cherry", "dewberries"];
    console.log(fruits.slice(0, 3));            // prints [ 'apple', 'banana', 'cherry' ]
    
    // splice(): changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
    // returns an array containing the deleted elements
    // array.splice(start, deleteCount, addItem)
    console.log(fruits.splice(1, 1));       // prints [ 'banana' ]
    console.log(fruits);                    // takes banana out of the fruits array. prints [ 'apple', 'cherry', 'dewberries' ]
    
    // toString(): returns value as a string
    //num to string
    var num = 14;
    console.log(num.toString());        // prints 14
    // array to string
    console.log(fruits.toString());     //prints apple,cherry,dewberries
    
    // includes():  determines whether an array includes a certain value among its entries, returning true or false as appropriate
    var arr = [1, 2, 3];
    console.log(arr.includes(2));       // prints true