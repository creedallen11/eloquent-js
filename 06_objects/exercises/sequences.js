
/* the function we're trying to define a sequence for, to find what
methods seq needs. */
function logFive(sequence) {
	for (var i = 0; i < 5; i++) {
		if (!sequence.next())
			break;
		console.log(sequence.current());
	}
}

/* A sequence frrom an array */
function ArraySeq(array) {
	this.pos = -1;
	this.array = array;
}
/* Move to the next element if possible. Return boolean of success. */
ArraySeq.prototype.next = function() {
	if (this.pos >= this.array.length - 1)
		return false;
	this.pos++;
	return true;
};
/* Return the current element */
ArraySeq.prototype.current = function() {
	return this.array[this.pos];
};


function RangeSeq(start, stop) {
	this.pos = start - 1;
	this.stop = stop;
}
/* Move to the next element if possible. Return boolean of success. */
RangeSeq.prototype.next = function() {
	if (this.pos >= this.stop)
		return false;
	this.pos++;
	return true;
};
/* Return the current element */
RangeSeq.prototype.current = function() {
	return this.pos;
};


logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 10