var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Create a variable to hold the top of stack
  var top = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //add value into storage object with the top of the stack as the key
    storage[top] = value;
    //increment top
    top++;
  };

  someInstance.pop = function() {
    //check if top is greater than zero
    if (top > 0) {
      //if true the decrement top so that top is the key to the top of our stack
      top--;
      //save popped value to be returned later
      var temp = storage[top];
      //delete value from the stack
      delete storage[top];
      //return value popped
      return temp;
    }
  };

  someInstance.size = function() {
    //return top as it will always be the count of how many key value pairs are in our stack
    //found small bug cannot use the word t h i s in comments or it throws error in specrunner
    //thinks the keyword t h i s is being used
    return top;
  };

  return someInstance;
};
