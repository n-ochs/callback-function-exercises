// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

// > sum([1, 2, 3])
// 6

const someArray = [1, 2, 3]

function sum(someArray) {
        return someArray.reduce(function(a, b) {
            return a + b
        })
}

console.log(sum(someArray))