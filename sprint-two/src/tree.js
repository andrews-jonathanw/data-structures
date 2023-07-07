var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  // advanced features
  // add parent property
  newTree.parent = null;

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create new tree
  var tree = new Tree(value);
  tree.parent = this;
  this.children.push(tree);
};

treeMethods.contains = function(target, tree) {
  // check in target in child array
  var childs;
  var result = false;
  // check if tree is null
  if (tree === undefined) {
    childs = this.children;
  } else {
    childs = tree.children;
  }
  for (var i = 0; i < childs.length; i++) {
    if (childs[i].value === target) {
      return true;
    } else {
      if (this.contains(target, childs[i]) === true) {
        return true;
      }
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  // remove children from parent
  // create empty array to hold children that arent the invoking child
  // push those children into array
  var parent = this.parent;
  var childrenOfParent = parent.children;
  var newChildren = [];
  for (var i = 0; i < childrenOfParent.length; i++) {
    //var childIndex = childrenOfParent.indexOf(this);
    if (childrenOfParent[i] !== this) {
      newChildren.push(childrenOfParent[i]);
    }
  }
  this.parent.children = newChildren;
  // remove parent from children
  this.parent = null;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
