var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    /*
    // make variable called node
    var node = new Node(value);
    // make variable for current node
    var currentNode;
    // check if head is null
    if (this.head === null) {
      this.head = node;
    } else {
      // loop through to find
      currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.tail = node;
    */
  };

  list.removeHead = function() {
    var headNode = this.head.value;
    this.head = this.head.next;
    return headNode;
  };

  list.contains = function(target) {
    // loop through and check all values
    var currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
