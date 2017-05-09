function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

ageList = {}
ancestry.forEach(function(person){
    var century = Math.ceil(person.died / 100)
    if (century in ageList) {
        ageList[century].push(person.died - person.born)
    } else {
        ageList[century] = [person.died - person.born]
    }
})

for (var key in ageList) {
    console.log(key + ": ", + average(ageList[key]));
}


/*
[
  {"name": "Emma de Milliano", "sex": "f",
   "born": 1876, "died": 1956,
   "father": "Petrus de Milliano",
   "mother": "Sophia van Damme"},
  {"name": "Carolus Haverbeke", "sex": "m",
   "born": 1832, "died": 1905,
   "father": "Carel Haverbeke",
   "mother": "Maria van Brussel"},
  … and so on
]
*/

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94