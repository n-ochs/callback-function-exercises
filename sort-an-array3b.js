// Given an array of array of numbers like:

var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
  ];

// Sort the array by the sum of each inner array.

function sumArr(total, num) {
    return total + num;
}
function compareArr(a, b) {
    let A = a.reduce(sumArr);
    let B = b.reduce(sumArr);
    return A - B;
}
function sortArr(arr) {
    return arr.sort(compareArr);
}
console.log(sortArr(arr));