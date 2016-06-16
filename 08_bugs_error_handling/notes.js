// STRICT MODE
// example
function canYouSpotTheProblem() {
	"use strict";
	for (counter = 0; counter < 10; counter++)
		console.log("Happy happy");
}

// canYouSpotTheProblem() // will complain counter is undefined
// "use strict";
function Person(name) { this.name = name; }
var creed = Person("Creed"); // forgot the new keyword
console.log(name); // created the global var name

// takeaway, use strict rarely hurts and might help debugging

// TESTING
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

function testVector() {
  var p1 = new Vector(10, 20);
  var p2 = new Vector(-10, 5);
  var p3 = p1.plus(p2);

  if (p1.x !== 10) return "fail: x property";
  if (p1.y !== 20) return "fail: y property";
  if (p2.x !== -10) return "fail: negative x property";
  if (p3.x !== 0) return "fail: x from plus";
  if (p3.y !== 25) return "fail: y from plus";
  return "everything ok";
}
console.log(testVector());
// → everything ok

// this sucks, testing frameworks exist in JS to automate a lot of this


// DEBUGGING
function numberToString(n, base) {
  var result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    // debugged by printing out n
    n = Math.floor(n / base); //n /= base;
  } while (n > 0);
  return sign + result;
}
console.log(numberToString(13, 10));
// → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…


// ERROR PROPAGATION
// error handling
// try {
//   console.log("You see", look());
// } catch (error) {
//   console.log("Something went wrong: " + error);
// }
context = null;

function withContext(newContext, body) {
  var oldContext = context;
  context = newContext;
  try {
    return body();
  } finally {
    context = oldContext;
  }
}

try {
  withContext(5, function() {
    if (context < 10)
      throw new Error("Not enough context!");
  });
} catch (e) {
  console.log("Ignoring: " + e);
}
// → Ignoring: Error: Not enough context!

console.log(context);
// → null

// for (;;) // create a loop that never terminates on its own for (;;) condition break


// define a new type of error
function InputError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";

// catch with:
 // catch (e) {
    // if (e instanceof InputError)


// ASSERTIONS
function AssertionFailed(message) {
  this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
  if (!test)
    throw new AssertionFailed(message);
}

function lastElement(array) {
  assert(array.length > 0, "empty array in lastElement");
  return array[array.length - 1];
}

// good way to make sure mistakes cause failures at the point of mistake