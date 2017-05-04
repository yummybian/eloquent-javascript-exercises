function arrayToList(arr) {
    var lst = null;
    for (var i = arr.length - 1; i >= 0; i--) {
        lst = {value: arr[i], rest: lst};
    }

    return lst;
}

function listToArray(lst) {
    var arr = [];
    for (var node = lst; node; node = node.rest) {
        arr.push(node.value);
    }

    return arr;
}

function prepend(n, lst) {
    return {value: n, rest: lst}
}

function nth(lst, n) {
    if (!lst)
        return undefined;
    else if (n == 0) 
        return lst.value;
    else 
        return nth(lst.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20