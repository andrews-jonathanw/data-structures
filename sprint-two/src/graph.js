// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var result = [];
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] !== node) {
      result.push(this.nodes[i]);
    }
  }
  this.nodes = result;
  // for every j in edges[node]
  for (var j = 0; j < this.edges[node]; j++) {
    this.removeEdge(this.edges[node][j], node);
  }
  // removeEdge(j, node);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.edges[fromNode].indexOf(toNode) > -1);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.edges[fromNode] === undefined) {
    this.edges[fromNode] = [toNode];
  } else {
    this.edges[fromNode].push(toNode);
  }
  if (this.edges[toNode] === undefined) {
    this.edges[toNode] = [fromNode];
  } else {
    this.edges[toNode].push(fromNode);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  // get index of each node that needs removed
  var removeIndexFrom = this.edges[fromNode].indexOf(toNode);
  var removeIndexTo = this.edges[toNode].indexOf(fromNode);
  // remove edge from fromNode array
  if (removeIndexFrom > -1) {
    //this.edges[fromNode].pop([removeIndexFrom]);
    var nodesToKeep = [];
    for (var i = 0; i < this.edges[fromNode]; i++) {
      if (this.edges[fromNode][i] !== toNode) {
        nodesToKeep.push(this.edges[fromNode][i]);
      }
    }
    this.edges[fromNode] = nodesToKeep;
  }
  // remove edge from toNode array
  if (removeIndexTo > -1) {
    //this.edges[toNode].pop([removeIndexTo]);
    var nodesToKeep = [];
    for (var i = 0; i < this.edges[toNode]; i++) {
      if (this.edges[toNode][i] !== fromNode) {
        nodesToKeep.push(this.edges[toNode][i]);
      }
    }
    this.edges[toNode] = nodesToKeep;
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




