var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add value to storage object
    storage[start++] = value;
  };

  someInstance.dequeue = function() {
    if (start > end) {
      var temp = storage[end];
      delete storage[end];
      end++;
      return temp;
    }
  };

  someInstance.size = function() {
    return start - end;
  };

  return someInstance;
};
