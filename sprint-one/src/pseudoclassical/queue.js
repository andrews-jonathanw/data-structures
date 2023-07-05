var Queue = function() {
  // create properties for the Queue class
  this.storage = {};
  this.start = 0;
  this.end = 0;
};

// Enqueue function
Queue.prototype.enqueue = function (value) {
  this.storage[this.start++] = value;
};

// Dequeue function
Queue.prototype.dequeue = function (value) {
  if (this.start > this.end) {
    var value = this.storage[this.end];
    delete this.storage[this.end];
    this.end++;
    return value;
  }
};

// Get size function
Queue.prototype.size = function (value) {
  return this.start - this.end;
};

