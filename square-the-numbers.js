// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

let arr = [1, 2, 3];
let newArray = [];

arr.forEach(function(element) {
    newArray.push(element ** 2);
})

console.log(newArray);