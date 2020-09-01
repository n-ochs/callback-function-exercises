// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!

// You are allowed to use a loop in the implementation of callNTimes.

const fun = function() {
    console.log('Hello, world!');
}

function callNTimes(number, fun) {
    for (i = 0; i < number; i++) {
        fun()
    }
}

callNTimes(5, fun)