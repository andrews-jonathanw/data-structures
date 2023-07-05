var Queue = function() {
  // Create an object called stack to be returned later
  var queue = {};
  //create storage property for the stack
  queue.storage = {};
  // Create top property for the stack
  queue.start = 0;
  queue.end = 0;
  _.extend(queue, queueMethods);
  // Return stack
  return queue;
};

var queueMethods = {
  // Enqueue Method
  enqueue(value) {
    this.storage[this.start] = value;
    this.start++;
  },

  // Pop Method
  dequeue() {
    // First check the value of start is greater than end
    if (this.start > this.end) {
      // save the value into a variable to be return after decrement of end
      var value = this.storage[this.end];
      //delete from queue
      delete this.storage[this.end];
      this.end++;
      return value;
    }
  },

  // Get Size Method
  size() {
    return this.start - this.end;
  }
};


