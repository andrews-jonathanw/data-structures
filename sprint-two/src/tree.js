var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create new tree
  var tree = new Tree(value);
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




/*
 * Complexity: What is the time complexity of the above functions?
 */
