var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    // create new Node obj
    var newNode = new Node(value);
    // check if head is null set node as head
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    // if head not null
    else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  };

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // work on changing previous
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
  };

  list.removeTail = function() {
    // save tail value
    var tailValue = this.tail.value;
    // update tail to be the node that tail. previous points
    // prev node get its previous
    this.tail = this.tail.previous;
    // update next of new tailto null
    if (this.tail !== null) {
      this.tail.next = null;
    }
    // return tail value
    return tailValue;
  };

  list.removeHead = function() {
    var headValue = this.head.value;
    this.head = this.head.next;
    if (this.head !== null) {
      this.head.previous = null;
    }
    return headValue;
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
  node.previous = null;
  return node;
};