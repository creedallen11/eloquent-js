/* pads a string */
function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

/* TextCell Object. */
function TextCell(text) {
  this.text = text.split("\n");
}
/* Method to find the max line width in array. */
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
/* Method returns min height this cell requires */
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
/* Returns array of length height which contains a series of 
strings that are width wide. Represents content of cell. */
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};


/* StretchCell is similar to TextCell, will inherit a TextCell object
and override properties. */ 
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}
/* Stretch to either max width of any cell or given width */
StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};
/* Stretch to either max height of any cell or given height */
StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};
/* Inherit from TextCell */
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]