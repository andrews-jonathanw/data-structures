var BinarySearchTree = function(value) {
  var bst = Object.create(bsTreePrototype);
  bst.value = value;
  bst.left = null;
  bst.right = null;

  return bst;
};

var bsTreePrototype = {};

bsTreePrototype.insert = function(value) {
  // create new tree when add value to an empty child spot
  if (this.value > value && this.left === null) {
    this.left = BinarySearchTree(value);
  } else if (this.value < value && this.right === null) {
    this.right = BinarySearchTree(value);
  }
  // check when value is smaller or bigger and the left or right is not null
  if (this.value > value && this.left !== null) {
    // if value is smaller and the left side is filled
    // invoke insert again to check that tree
    this.left.insert(value);
  } else if (this.value < value && this.right !== null) {
    //do the same if the value is greater
    this.right.insert(value);
  }
};

bsTreePrototype.contains = function(value, tree) {
  // this value is equal to value return true
  var left;
  var right;
  var tValue;
  if (tree === undefined) {
    left = this.left;
    right = this.right;
    tValue = this.value;
  } else {
    left = tree.left;
    right = tree.right;
    tValue = tree.value;
  }
  if (value === tValue) {
    return true;
  } else if (left === null && right === null) {
    // if not equal and current tree has no children return false
    return false;
  } else if (value < tValue) {
    // otherwise if value is smaller than this value recurse on left child
    return this.contains(value, left);
  } else if (value > tValue) {
    // other wised recurse on right child
    return this.contains(value, right);
  }
};

bsTreePrototype.depthFirstLog = function(cb, tree) {
  // handle recursive trees
  var left;
  var right;
  var tValue;
  if (tree === undefined) {
    left = this.left;
    right = this.right;
    tValue = this.value;
  } else {
    left = tree.left;
    right = tree.right;
    tValue = tree.value;
  }
  // call cb on value
  cb(tValue);
  // if current tree has no children then return
  if (left === null && right === null) {
    return;
  }
  // if it has left child recurse on left child
  if (left !== null) {
    this.depthFirstLog(cb, left);
  }
  // else recurse on right child
  if (right !== null) {
    this.depthFirstLog(cb, right);
  }
};

bsTreePrototype.breadthFirstLog = function(cb) {
  // handle recursive trees
  var queue = new Queue();
  // add root to queue
  queue.enqueue(this);
  // while queue is not empty
  while (queue.length() > 0) {
    // current tree is the first item in queue
    var currentTree = queue.dequeue();
    // call function on tree
    cb(currentTree.value);
    // add tree's children to queue
    if (currentTree.left !== null) {
      queue.enqueue(currentTree.left);
    }
    if (currentTree.right !== null) {
      queue.enqueue(currentTree.right);
    }
  }
};

bsTreePrototype.rebalance = function () {

};

//class for queue
class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  length() {
    return this.tail - this.head;
  }
  isEmpty() {
    return this.length === 0;
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
