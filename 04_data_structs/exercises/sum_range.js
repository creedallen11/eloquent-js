/* EX 1 THE SUM OF A RANGE 
Write a range function that takes two arguments, start and end, and 
returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum 
of these numbers. Run the previous program and see whether it does indeed return 55. */

function range(start, end, step) {
  var array = [];
  if (step == undefined) step = 1;
  
  if (step > 0) { 
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(numbers) {
  s = 0;
  for (var n in numbers)
    s += numbers[n];
  return s;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55