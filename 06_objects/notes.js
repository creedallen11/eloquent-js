// METHODS , properties that hold function values

var rabbit = {};
rabbit.speak = function(line) {
  console.log("The rabbit says '" + line + "'");
}

// rabbit.speak("I'm alive.")

function speak(line) {
  console.log("The " + this.type + " rabbit says '" + line + " '");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};
// note how this points to the object it was called on, 
// whiteRabbit.speak("Oh my ears and whiskers, " +
//                   "how late it's getting!");
// fatRabbit.speak("I could sure use a carrot right now.");

// Call is a method like apply
// speak.apply(fatRabbit, ["Burp!"]);
// speak.call({type: "old"}, "Oh my.");

// PROTOTYPES

var empty = {};
// console.log(empty.toString); // -> function toString(){…}
// console.log(empty.toString()); // -> [object Object]

// console.log(Object.getPrototypeOf({}) == 
//             Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));

var protoRabbit = {
  speak: function(line) {
    console.log("The " + this.type + " rabbit says '" +
                line + "'");
  }
}; // create an object using Object.create, protorabbit acts as container for properties shared by all rabbits
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer"
// killerRabbit.speak("SKREEE!");
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
}
// CONSTRUCTORS

//more convienent way to create objects that derive from a shared prototype
function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
// console.log(blackRabbit.type);

// constructors automatically get a property prototype defaulting to empty object
// the actual getprototypeOf is Function.prototype
Rabbit.prototype.speak = function(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
};
// blackRabbit.speak("Kill all humans...");


// OVERRIDING DERIVED PROPERTIES
Rabbit.prototype.teeth = "small";
// console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody"
// console.log(killerRabbit.teeth)
// console.log(blackRabbit.teeth)
// console.log(Rabbit.prototype.teeth)

// PROTOTYPE INFERENCE

// can at any time add new propertie sand methods to objects based on it
Rabbit.prototype.dance = function() {
  console.log("The " + this.type + " rabbit dances a jig.");
};
// killerRabbit.dance();

// above causing problems below: 
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

Object.prototype.nonsense = "hi";
for (var name in map)
  // console.log(name);
// these two events are NOT in map but appear
// console.log("nonsense" in map) // true
// console.log("toString" in map) // true

// this is how to hdie them from map, enumerable to false
Object.defineProperty(Object.prototype, "hiddenNonsense",
                      {enumerable: false, value: "hi"});
for (var name in map)
  // console.log(name);
// console.log(map.hiddenNonsense)

// console.log(map.hasOwnProperty("toString")); // often more ueful than object in map
for (var name in map) {
  if (map.hasOwnProperty(name)) {
    // ... this is an own property
  }
}

// PROTOTYPE-LESS OBJECTS
// exactly what we want for a map, can safely use in or for loops over properties
var map = Object.create(null); 
map["pizza"] = 0.069
// console.log("toString" in map); // false
// console.log("pizza" in map); // true


// POLYMORPHISM
// work with values of different shapes, as long as they support the interface it expects
