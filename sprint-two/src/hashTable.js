

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._filledSpots = 0;
};

HashTable.prototype.insert = function(k, v) {
  // ADVANCED FEATURE Double Size
  // increased table size here if needed
  // check if 75% full
  if (this._filledSpots / this._limit >= 0.75) {
    var oldStorage = this._storage;
    var oldLimit = this._limit;
    var newLimit = oldLimit * 2;
    this._storage = LimitedArray(this._limit * 2);
    // iterate through each bucket in oldStorage
    for (var i = 0; i < oldLimit; i++) {
      //var index = getIndexBelowMaxForKey(k, oldLimit);
      var bucket = oldStorage.get(i);
      this._storage.set(i, bucket);
    }
    this._limit = newLimit;
    // add bucket to index in new storage
    //this._storage = LimitedArray(this._limit * 2);
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // if bucket is undefined add value pair
  if (bucket === undefined) {
    this._storage.set(index, [[k, v]]);
    this._filledSpots++;
  } else {
    // iterate through bucket
    for (var i = 0; i < bucket.length; i++) {
      // if key is found in key index of an iteration in the bucket
      if (bucket[i][0] === k) {
        bucket[i] = [k, v];
        // overwrite the old value to new value pair
        this._storage.set(index, bucket);
        // break after bucket is updated to array
        break;
      }
    }
    bucket.push([k, v]);
    this._filledSpots++;
    // set storage to the new bucket array
    this._storage.set(index, bucket);
  }
  //console.log('hashTable currently: ');
  //this._storage.getStorage();
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // iterate through bucket
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      // check key position for each iteration in bucket if it equals the k
      var key = bucket[i][0];
      var value = bucket[i][1];
      // if key is a match return the value at key
      if (key === k) {
        return value;
      }
    }
  }
  // if key entered is not valid will return undefined
};

HashTable.prototype.remove = function(k) {
  // get index of key in storage
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create bucket var to hold bucket at that index
  var bucket = this._storage.get(index);
  // create variable to add value pairs not to be deleted
  var newBucket = [];
  // iterate through bucket
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      var keyValuePair = bucket[i];
      var key = keyValuePair[0];
      // check if bucket at index key is not equal to input key(k)
      if (key !== k) {
        // push pairs to be kept into new bucket array
        newBucket.push(keyValuePair);
      }
    }
  }
  // overwrite bucket in storage with new bucket
  this._storage.set(index, newBucket);
  this._filledSpots--;

  // check percentage filled spots
  // if < 25%
  if (this._filledSpots / this._limit < 0.25) {
    // make a new limited array with half limit
    var newArray = LimitedArray(this._limit / 2);
    // loop through old array
    for (var i = 0; i < this._limit; i++) {
      // add old array stuf to new array
      var index = getIndexBelowMaxForKey(k, this._limit / 2);
      newArray.set(index, this._storage.get(i));
    }
    // update storage
    this._storage = newArray;
    // update limit
    this._limit = this._limit / 2;
  }
  //console.log('after removal.....hashTable currently: ');
  //his._storage.getStorage();
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


