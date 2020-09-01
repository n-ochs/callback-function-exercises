// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

var arr = [-2, 4, 58, -1, -7, 18]

var filteringArray = function(item) {
    return item > 0;
}

console.log(arr.filter(filteringArray))