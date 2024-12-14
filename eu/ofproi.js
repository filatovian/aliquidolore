console.log(checkValue(5, 1, 10, 2)); // Outputs: 0.5 (since 5 is an integer and within the range [1, 10))
console.log(checkValue(5.5, 1, 10, 2)); // Outputs: 0 (since 5.5 is not an integer)
console.log(checkValue(11, 1, 10, 2)); // Outputs: 0 (since 11 is not within the range [1, 10))
console.log(checkValue(5, 7, 20, 2)); // Outputs: 0 (since 5 is not within the range [7, 20))
