// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-maytd');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
   let males = _.filter(array, function(element, index, array) {
        if (element.gender === 'male') {
            return true;
        }
    });
    
    return males.length;
};

var femaleCount = function(array) {
    return _.reduce(array, function(previousValue, currentValue, currentIndex) {
        if (currentValue.gender === 'female') {
            return ++previousValue;
        }
        return previousValue;
    }, 0);
};

var oldestCustomer = function(array) {
    let oldest = _.reduce(array, function(previousValue, currentValue, currentIndex) {
        if (currentValue.age > previousValue.age) {
            return currentValue;
        } 
        return previousValue;
    });
    
    return oldest.name;
};

var youngestCustomer = function(array) {
    let youngest = _.reduce(array, function(previousValue, currentValue, currentIndex) {
        if (currentValue.age < previousValue.age) {
            return currentValue;
        } 
        return previousValue;
    });
    
    return youngest.name;
};

var averageBalance = function(array) {
    let totalBalance =  _.reduce(array, function(previousValue, currentValue, currentIndex) {
        return previousValue + Number(currentValue.balance.replace(/[^0-9.-]+/g,""));
    }, 0);
    
    return totalBalance / array.length;
};
  
var firstLetterCount = function (array, letter) {
    let namesWithLetter = _.filter(array, function(element, index, array) {
        if (element.name[0].toUpperCase() === letter.toUpperCase()) {
            return true;
        }
    });
    
    return namesWithLetter.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    let friends;
    
    _.each(array, function(element, index, array) {
        if (element.name === customer) {
            friends = _.filter(element.friends, function(elementF, indexF, arrayF) {
                if (elementF.name[0].toUpperCase() === letter.toUpperCase()) {
                    return true;
                }
            });
        }
    });
    
    return friends.length;
};

var friendsCount = function(array, name) {
    let hasFriend = [];
    
    _.each(array, function(element, index, array) {
        let friendList = _.pluck(element.friends, 'name');
        if (_.contains(friendList, name)) {
          hasFriend.push(element.name);
      }
    });
    
    return hasFriend;
};

var topThreeTags = function(array) {
    let tagList = [];
    
    _.each(array, function(element, index, array) {
        tagList = tagList.concat(element.tags);
    });
  
    let uniqueTagList =_.unique(tagList);
    let occurrences = {};
    
    _.each(uniqueTagList, function(element, index, array) {
        let specificTagList = _.filter(tagList, function(e, i, a) {
                return element === e;
        });
        occurrences[element] = specificTagList.length;
    });
    
    let mostPop = [];
    let most = 0;
    _.each(occurrences, function(value, key) {
        if (most < value) {
            most = value;
        }
    });
    
    _.each(occurrences, function(value, key) {
        if (value === most) {
            mostPop.push(key);
        }
    });
    console.log(mostPop);
    return mostPop;
};

var genderCount = function(array) {
    let genders = {};
    
    genders.male = maleCount(array);
    genders.female = femaleCount(array);
    genders.transgender = _.reduce(array, function(previousValue, currentValue, currentIndex) {
        if (currentValue.gender === 'transgender') {
            return ++previousValue;
        }
        return previousValue;
    }, 0);
    
    return genders;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
