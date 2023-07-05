var Stack = function() {
  // Create an object called stack to be returned later
  var stack = {};
  //create storage property for the stack
  stack.storage = {};
  // Create top property for the stack
  stack.top = 0;
  _.extend(stack, stackMethods);
  // Return stack
  return stack;
};

var stackMethods = {
  // Push Method
  push(value) {
    this.storage[this.top] = value;
    this.top++;
  },

  // Pop Method
  pop() {
    // First check the value of top is greater than zero
    if (this.top > 0) {
      // if true decremenet first like in the functional pattern
      this.top--;
      var value = this.storage[this.top];
      //delete from stack
      delete this.storage[this.top];
      return value;
    } else {
      // simply return so we dont decrement past 0
      return this.storage[this.top];
    }
  },

  // Get Size Method
  size() {
    return this.top;
  }
};


