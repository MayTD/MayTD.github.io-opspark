// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

// identity takes a single value
_.identity = function(value) {
    // return value unchanged
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// typeOf takes a single value
_.typeOf = function(value) {
    // check if array
    if (Array.isArray(value)) {
        return 'array';
    }
    // check if null
    else if (value === null) {
        return 'null';
    }
    
    // use typeOf method unary operator
    return (typeof value);
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// first takes an array and a number
_.first = function(array, num) {
    // check if array is not array or if num is neg
    if (!Array.isArray(array) || num < 0) {
        // return an empty list
        return [];
    }
    // check if num is greater than array length
    else if(num > array.length) {
        // return whole array
        return array;
    }
    // check if num is not given or is not a number
    else if (!num || isNaN(num)) {
        // return first element of array
        return array[0];
    }
    
    // return number of elements equal to num
    return array.slice(0, num);
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// last takes an array and a number
_.last = function(array, num) {
    // check if array is not array or if num is neg
    if (!Array.isArray(array) || num < 0) {
        // return an empty list
        return [];
    }
    // check if num is greater than array length
    else if(num > array.length) {
        // return whole array
        return array;
    }
    // check if num is not given or is not a number
    else if (!num || isNaN(num)) {
        // return last element of array
        return array[array.length - 1];
    }
    
    // return number of elements equal to num
    return array.slice(num - 1);
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

// indexOf takes an array and a value
_.indexOf = function(array, value) {
    // loop through array and returns index at which value is first found
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            // return the index
            return i;
        }
    }
    
    // value is not found, return -1
    return -1;
};


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

//contains takes in an array and a value
_.contains = function(array, value) {
    // includes will loop over the array and return true if it's found, and false it not found
    return array.includes(value) ? true : false;
};


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// each takes in an array or object and a funcion
_.each = function(collection, func) {
    // check if collection is an array
    if (Array.isArray(collection)) {
        // calls func for each element
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    }
    // collection is an object
    else {
        // calls func for each prop
        for (let key in collection) {
            func(collection[key], key, collection);
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// unique takes in an array
_.unique = function(array) {
    let uniq = [];
    
    for (let i = 0; i < array.length; i++) {
        // if the index of first-occurring value is greater than i
        if (_.indexOf(array, array[i]) >= i) {
            uniq.push(array[i]);
        }
    }
    
    return uniq;
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// filter takes an array and a function
_.filter = function(array, func) {
    // holds values that will pass through func
    let arr = [];
    
    // each element will call func
    _.each(array, function(element, index, array) {
        // if func returns true, push the element into arr
        if (func(element, index, array)) {
            arr.push(element);
        }
    });
    
    return arr;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse of _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

// reject takes an array and a function
_.reject = function(array, func) {
    // filter returns an array that passes through func
    return _.filter(array, function(element, index, array) {
        // return the opposite of func, true to false
        // this makes filter to return the opposite
        return !func(element, index, array);
    });
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

// partition takes an array and a function
_.partition = function(array, func) {
    // array with two empty arrays
    let array2 = [[], []];
    
    _.each(array, function(element, index, array) {
        // if func returns true, push true element into the first element's array
        if (func(element, index, array)) {
            array2[0].push(element);
        } 
        // func returns false, push false element into sec element's array
        else {
            array2[1].push(element);
        }
    });
    
    return array2;
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

// map takes an array or object and a function
_.map = function(collection, func) {
    let arr = [];
    
    // for each element, call func and push its result into arr
    _.each(collection, function(element, index, collection) {
        return arr.push(func(element, index, collection));
    })
    
    return arr;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop) {
    // map will return an array with values of prop in each element's objects 
    return _.map(array, function(element, index, array) {
        // return element's object's key's value
        return element[prop];
    });
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
    let bool = true;
    
    // call func for every element
    // return false if it finds any false values
    _.each(collection, function(element, index, collection) {
        // func is actually a function and func is false
        if (typeof func === 'function' && !func(element, index, collection)) {
          bool = false;
        }
        // function is not provided and element is false
        else if (typeof func !== 'function' && !element) {
            bool = false;
        }
    });
    
    return bool;
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
   let bool = false;
    
    // call func for every element
    // return true if it finds any true values
    _.each(collection, function(element, index, collection) {
        // func is actually a function and func is true
        if (typeof func === 'function' && func(element, index, collection)) {
          bool = true;
        }
        // function is not provided and element is true
        else if (typeof func !== 'function' && element) {
            bool = true;
        }
    });
    
    return bool;
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function (array, func, seed) {
    if (seed) {
        for (let i = 0; i < array.length; i++) {
            seed = func(seed, array[i], i);
        }
    }
    else if (seed === undefined){
        seed = array[0];
        for (let i = 1; i < array.length; i++) {
            seed = func(seed, array[i], i);
        }
    }
    
    return seed;
};


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

// extend should handle any number of arguments
_.extend = function(object1, object2) {
    // Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object
    // spread syntax (...) allows an iterable to expand in places where 0+ arguments are expected
    return Object.assign(object1, ...arguments);
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
