/* EX1 FLATTENING */
var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(a, b) {return a.concat(b)}));
  // → [1, 2, 3, 4, 5, 6]

// basically equivalent but the second shows optional initial Value []
console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);}, []));