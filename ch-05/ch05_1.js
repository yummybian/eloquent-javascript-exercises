var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(acc, val) {
    return acc.concat(val);
}, []));
// → [1, 2, 3, 4, 5, 6]