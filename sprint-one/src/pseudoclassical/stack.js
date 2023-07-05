var Stack = function() {
  // create properties for the Stack class
  this.storage = {};
  this.top = 0;
};

// Push function
Stack.prototype.push = function (value) {
  this.storage[this.top++] = value;
};

// Pop function
Stack.prototype.pop = function (value) {
  if (this.top > 0) {
    this.top--;
    var value = this.storage[this.top];
    delete this.storage[this.top];
    return value;
  } else {
    return this.storage[this.top];
  }
};

// Get size function
Stack.prototype.size = function (value) {
  return this.top;
};


