function deepEqual(a, b) { 
    if (a === b) return true;

    if (a == null || typeof a != "object" || 
        b == null || typeof b != "object") 
        return false;

    var keysOfA = 0, keysOfB = 0;

    for (var key in a) {
       keysOfA += 1; 
    }

    for (var key in b) {
        keysOfB += 1;
        if (!(key in a) || !deepEqual(a[key], b[key]))
            return false;
    }

    return keysOfA == keysOfB;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true