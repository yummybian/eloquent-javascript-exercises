function logFive(sequence) {
    for (var i = 0; i < 5; i++) {
        if (!sequence.next())
            break;
        console.log(sequence.current());
    }
}

function ArraySeq(array) {
  this.pos = -1;
  this.array = array;
}

function RangeSeq(from, to) {
   this.pos = from - 1;
   this.to = to;
}

ArraySeq.prototype.next = function() {
    if (this.pos >= this.array.length - 1) 
        return false;
    this.pos++;
    return true;
};

ArraySeq.prototype.current = function() {
    return this.array[this.pos];
};


RangeSeq.prototype.next = function() {
    if (this.pos >= this.to) 
        return false;
    this.pos++;
    return true;
}

RangeSeq.prototype.current = function() {
    return this.pos;
}


logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104