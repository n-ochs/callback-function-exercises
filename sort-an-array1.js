// Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];

function sortNames(someArray) {
    return someArray.sort()
}

var newArray = sortNames(people)

console.log(newArray)