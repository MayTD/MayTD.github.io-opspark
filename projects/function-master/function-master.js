//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let arr = [];
    for (let key in object) {
        arr.push(object[key]);
    }
    
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(" ");
    
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let arr = objectValues(object);
    let stringArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            stringArr.push(arr[i]);
        }
    }
    
    return stringArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    }
    
    return 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var words = string.split(' ');  // one two three -> ['one', 'two', 'three']
    
    for (let i = 0; i < words.length; i++) {
        words[i] = capitalizeWord(words[i]);
    }
    
    return words.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let name = capitalizeWord(object.name);
    return "Welcome " + name + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    let name = capitalizeWord(object.name);
    let species = capitalizeWord(object.species);
    return name + " is a " + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if ('noises' in object && object.noises.length > 0) {
        return object.noises.join(" ");
    } 
    
    return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if (string.includes(word)) {
        return true;
    }
    
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // object exists and object has friends key
    if (object && object.friends) {
        // loops over friends array and returns true if given name is found
        return object.friends.includes(name);
    }
    return false;
    
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // will contain all names from array except person with name variable
    // person with name variable cannot be friends with themselves
    let allNames = [];
    
    let notFriends = [];
    
    // populate allNames
    for (let names in array) {
        // exclude name in parameter
        if (array[names].name !== name) {
            allNames.push(array[names].name);
        }
    }
    
    // loop over array to find name
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            // name is found
            // loop over allNames to find if that person is friends with name
            for (let j = 0; j < allNames.length; j++) {
                // if false, the means the person is not friends with name
                // push into array of notFriends
                if (!isFriend(allNames[j], array[i])) {
                    notFriends.push(allNames[j]);
                }
            }
        }
    }
    
    return notFriends;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    if (key in object) {
        // this will reassign
        object[key] = value;
    }
    else {
        // this will create a new key/value
        object[key] = value;
    }
    
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // array of key names
    let temp = Object.keys(object);
    
    // loop over temp array
    // for each element in temp, find if that value is the same in array
    for (let i = 0; i < temp.length; i++) {
        if (array.includes(temp[i])){
            delete object[temp[i]];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // will contain no duplicates from array
    let unique = [];
    
    // sorts array elements in order
    array.sort();
   
   // iterates through and compares one element and the next to see if they are the same
   // if they are different, current element is unique
   for (let i = 0; i < array.length; i++) {
       if (array[i] !== array[i + 1]) {
           unique.push(array[i]);
       }
   }
    
    return unique;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}