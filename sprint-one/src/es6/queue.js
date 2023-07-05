class Queue {
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }
  // Enqueue
  enqueue(value) {
    this.storage[this.start++] = value;
  }

  // Dequeue
  dequeue() {
    if (this.start > this.end) {
      var value = this.storage[this.end];
      delete this.storage[this.end];
      this.end++;
      return value;
    }
  }

  // Get Size
  size() {
    return this.start - this.end;
  }

}
