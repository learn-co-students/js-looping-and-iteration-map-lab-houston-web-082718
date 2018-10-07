// Code your solution in this file.

//lowerCaseDrivers - this function takes an array of drivers, and returns an array of 
//the drivers names in lowercase. 
function lowerCaseDrivers(array) {
    return array.map(function(element) {return element.toLowerCase(); });
}

//nameToAttributes - this function takes an array of drivers with their first and 
//last name separated by a space, and returns an array of JavaScript objects with 
//firstName and lastName attributes.
function nameToAttributes(array) {
    return array.map(function(element) {return {firstName: element.split(" ")[0], lastName: element.split(" ")[1]}; });
}

//attributesToPhrase - this function takes an array of drivers as JavaScript objects 
//and returns a string saying "<NAME OF DRIVER> is from <HOMETOWN>" for each JavaScript 
//object in the array.
function attributesToPhrase(array) {
    return array.map(function(element) {return `${element.name} is from ${element.hometown}`; });
}