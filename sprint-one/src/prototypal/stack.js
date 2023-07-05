var Stack = function() {
  var someInstance = Object.create(stackMethods);
  //storage property
  someInstance.storage = {};
  //top property
  someInstance.top = 0;
  //return instance
  return someInstance;
};

var stackMethods = {
  // Push Method
  push(value) {
    this.storage[this.top] = value;
    this.top++;
  },

  // Pop Method
  pop() {
    if (this.top > 0) {
      this.top--;
      var value = this.storage[this.top];
      delete this.storage[this.top];
      return value;
    } else {
      return this.storage[this.top];
    }
  },

  // Get Size Method
  size() {
    return this.top;
  }
};



