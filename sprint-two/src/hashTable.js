

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._valueKeyPairs = {};
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if index same and keys are different, move index of overwritting item
  // if index same and keys same, overwrite
  if (this._storage[index] !== undefined && this._valueKeyPairs[this._storage[index]] !== k) {
    this._storage[index + 1] = v;
  } else {
    this._storage[index] = v;
  }
  this._valueKeyPairs[v] = k;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if the value in this spot mathces the k input reutrn what ins the spot
  if (this._valueKeyPairs[this._storage[index]] === k) {
    return this._storage[index];
  } else {
  // otherwise return whats in the next spot
    return this._storage[index + 1];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if the value in this spot mathces the k input reutrn what ins the spot
  if (this._valueKeyPairs[this._storage[index]] === k) {
    this._storage[index] = undefined;
  } else {
  // otherwise return whats in the next spot
    return this._storage[index + 1] = undefined;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


