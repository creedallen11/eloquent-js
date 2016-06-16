/* EX3 A LIST DATA STRUCTURE */
/* Create a list from an array */
function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) 
    list = {value: array[i], rest: list};
  return list;
}

/* Create a list from an array */
function listToArray(list) {
  var array = []
  for (var node = list; node; node = node.rest)
    array.push(list.value);
  return array;
}

/* Add an element to the front of a list */
function prepend(element, list) {
  return {value : element, rest : list };
}

/* Recursively find/return the nth element of a linked list. */
function nth(list, number) {
  if (!list) return undefined;
  else if (number == 0) return list.value;
  else return nth(list.rest, number - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20