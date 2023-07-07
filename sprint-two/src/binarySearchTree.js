var BinarySearchTree = function(value) {
  var bst = Object.create(bsTreePrototype);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

var bsTreePrototype = {};

bsTreePrototype.insert = function(value) {
  // check if value is smaller than this.value && null for both sides of root (bst.value);
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


/*
 * Complexity: What is the time complexity of the above functions?
 */
