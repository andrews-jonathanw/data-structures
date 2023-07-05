class Stack {
  constructor() {
    this.storage = {};
    this.top = 0;
  }
  // Push
  push(value) {
    this.storage[this.top++] = value;
  }

  // Pop
  pop() {
    if (this.top > 0) {
      this.top--;
      var value = this.storage[this.top];
      delete this.storage[this.top];
      return value;
    } else {
      return this.storage[this.top];
    }
  }

  // Get Size
  size() {
    return this.top;
  }

}