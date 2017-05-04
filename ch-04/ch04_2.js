function reverseArray(arr) {
    var newArr = [];
    arr.forEach(function(item, index, array) {
        newArr.unshift(item);
    });

    return newArr;
}

function reverseArrayInPlace(arr) {
    for (var i = 0, j = arr.length-1; i < j; i++, j--) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]