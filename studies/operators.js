/*
    OPERATORS:
    
// 0. //
    used to assign, compare, or perform arithmetic operations.
    
*/

// 1. Assignment operators //
    // assignment
    var a = 5; 
    
    // addition assignment. 
    a += 10;        // a = 15
    
    // subtraction assignment. 
    a -= 5;         // a = 10
    
   // multiplication assignment. 
    a *= 4;         // a = 20
    
    // division assignment. 
    a /= 2;         // a = 10
    
    // remainder assignment. 
    a %= 4;         // a = 2
    
    // exponentiation assignent.
    a **= 3;        // a = 8
    
    
// 2. Arithmetic operators //
    var b = 4;
    
    // increments by 1.
    b++;            // 4 + 1
    
    // decrements by 1. 
    b--;            // 4 - 1
    
    // multiplacation
    b * 4;          // 4 * 4
    
    // division
    b / 2;          // 4 / 2
    
    // modulo (remainder)
    b % 3;          // 4 / 3 = 1.333, remainder is 1
    
    // exponentiation
    b ** 2;         // 4^2
    
// 3. Comparison operators // 
    // equal operator returns true if operands are equal. 
    a == b;         // false
    
    // strictly equal operator returns true if operands are strictly equal (including datatype). 
    a === b;        // false
    
    // not equal returns true if operand is NOT equal. 
    a != b;         // true
    
    // strictly not equal returns true if operands are of the same type but not equal, or are of different type. 
    a !== b;        // true
    
    // greater than returns true if left operand is larger than the right. 
    a > b;          // true
    
    // greater than or equal returns true of left operand is larger or the same as right. 
    a >= b;         // true
    
    // less than returns true if left is smaller than right. 
    a < b;          // false
    
    // less than or equal returns true if left is smaller or same as right. 
    a <= b;         // false
    
    
// 4. Logical operators //
    // AND returns true if both operands are true; otherwise, returns false. 
    console.log(a < 0 && b > 0);    // false
    
    // OR returns true if either operand is true; if both are false, returns false.
    console.log(a < 0 || b > 0);    // true
    
    // NOT returns false if its single operand that can be converted to true; otherwise, returns true.
    console.log(!(a < 0));          // true
    
    
// 5. Unary operators (!, typeOf, -) //
//an operation with only one operand
    // delete deletes values of a specific index of an array and the specific property of an object
    // it returns true if it successfully deleted the property or if the property does not exist. It returns** false** if it fails to delete an item.
    var test = {key: '1'};
    delete test;             // returns false
    console.log(test);      // returns {key: '1'}
    delete test.key;        // returns true
    console.log(test);      // returns {}

    // typeof returns the type of the operand
    typeof 2;            // returns 'number'
    typeof true;         // returns 'boolean'
    typeof '2';          // returns 'string'
    
    // void evaluates the expression and doesn't consider the return value
    // often used merely to obtain the undefined primitive value using "void(0)" (useful when evaluating an expression without using the return value)
    void (3);           // returns undefined
    void 'Hello';       // returns undefined
    
    // unary plus (+) attempts to convert the expression to number
    // if the operand cannot be converted into a number, the unary plus operator will return NaN
    +'3';               // 3
    +false;             // 0
    +'hello';           // NaN        
    
    // unary negation (-) attempts to convert the expression to number, then negates it
    -'3';               // -3
    -true;              // -1
    
    // bitwise not (~) performs NOT operation on each bit of the expression by inverting all the bits in the operand and return a number
    // A bitwise not on a number results in: -(x + 1)
    ~2                  //returns -3
    ~'-3'               // returns 2
    ~true               // returns -2
    
    // NOT (!) performs logical negation on the expression
    !false;             // returns true
    
    
// 6. Ternary operator (a ? b : c) //
// condition ? exprIfTrue : exprIfFalse (shortcut for the if statement)
    var age = 19;
    var beverage = (age >= 21) ? "beer" : "soda";
    console.log(beverage);        // soda