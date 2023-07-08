describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add string and number values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    set.add(1);
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
    expect(set.contains(1)).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    set.remove(1);
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(set.contains(1)).to.equal(false);
  });

  xit('should add functions, arrays, and objects to a set', function() {
    set.add(1);
    set.add({'a': 'apple'});
    set.add([1, 2, 3]);
    set.add(function() { return 'hi'; });
    expect(set.contains({'a': 'apple'})).to.equal(true);
    expect(set.contains([1, 2, 3])).to.equal(true);
    expect(set.contains((function() { return 'hi'; }))).to.equal(true);
  });

});
