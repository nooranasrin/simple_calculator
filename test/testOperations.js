const assert = require('assert');
const sum = require('../src/operations.js').sum;
const fibnacci = require('../src/operations.js').fibnacci;

describe('testSum',function() {
  it('should return sum if both ranges are positive numbers', function() {
    assert.strictEqual(sum(1,2,1),3);
  });
  it('should return sum if one positive range and one negative range', function() {
    assert.strictEqual(sum(1,-10,1),-54);
  });
  it('should return sum if both of the ranges are negative', function() {
    assert.strictEqual(sum(-2,-4,1),-9);
  });
  it('should incriment by the given value if the ranges are in ascending order', function() {
    assert.strictEqual(sum(2,8,2),20);
  });
  it('should decriment by the given value if the ranges are in descending order', function() {
    assert.strictEqual(sum(8,2,2),20);
  });
});

describe('testFibnacci', function() {
  it('should print first fixed fibnacci if range starts with 0 and 1', function() {
    assert.deepStrictEqual(fibnacci(1,2),[1,1,2]);
    assert.deepStrictEqual(fibnacci(0,2),[0,1,1,2]);
  });
  it('should print second fibnacci if range start with 0,1 and 2', function() {
    assert.deepStrictEqual(fibnacci(1,2),[1,1,2]);
    assert.deepStrictEqual(fibnacci(0,2),[0,1,1,2]);
    assert.deepStrictEqual(fibnacci(2,3),[2,3]);
  });
  it('should start with first fibnacci if range starts with 0',function() {
    assert.deepStrictEqual(fibnacci(0,2),[0,1,1,2]);
  });
  it('should return fibnacci starts with 0 if range is starts with -ve', function() {
    assert.deepStrictEqual(fibnacci(-1,2),[0,1,1,2]);
  });
  it('should return an empty array if both ranges are negative or first range is greater than second', function() {
    assert.deepStrictEqual(fibnacci(3,2),[]);
    assert.deepStrictEqual(fibnacci(-1,-2),[]);
  });
});
