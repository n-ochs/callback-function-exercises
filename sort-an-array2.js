// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.

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

function sortLength (someArray) {
    return someArray.sort(someArray.sortLength);
}

var newArray = sortLength(people)

console.log(newArray)