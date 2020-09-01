// Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

// > acronym(['very', 'important', 'person'])
// 'VIP'

// > acronym(['national', 'aeronautics', 'space', 'administration'])
// 'NASA'

let someArray = ['', 'very', 'important', 'person']

function acronym(someArray) {
    return someArray.reduce(function(a, b) {
        return a += b[0]
    })
}

console.log(acronym(someArray));