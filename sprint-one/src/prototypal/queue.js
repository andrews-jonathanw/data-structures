var Queue = function() {
  var someInstance = Object.create(queueMethods);
  //storage property
  someInstance.storage = {};
  //start property
  someInstance.start = 0;
  someInstance.end = 0;
  //return instance
  return someInstance;
};

var queueMethods = {
  // Enqueue Method
  enqueue(value) {
    this.storage[this.start++] = value;
  },

  //Dequeue Method
  dequeue() {
    if (this.start > this.end) {
      var temp = this.storage[this.end];
      delete this.storage[this.end];
      this.end++;
      return temp;
    }
  },

  // Get Size Method
  size() {
    return this.start - this.end;
  }
};


