// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var newArr = function(element) {
    return element%2 == 0
}

console.log(arr.filter(newArr))


//another way

function findEvens(someArray) {
    return someArray.filter(function(element) {
        return element%2 == 0
    })
}

var newArray = findEvens(arr)

console.log(newArray)