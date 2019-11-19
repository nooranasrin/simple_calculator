const assert = require('assert');
const getResult = require('../src/performOperations.js').getResult;
const getResultOfOperation = require('../src/performOperations.js').getResultOfOperation;

describe('testGetResult',function() {
  it('should return sum if operation is sum', function() {
    assert.deepStrictEqual(getResult(['sum','6','7']),[13]);
  });
  it('should return fibnacci numbers if operation is fibnacci', function() {
    assert.deepStrictEqual(getResult(['fibnacci','1','2']),[1,1,2]);
  });
  it('should return prime numbers if operation is prime', function() {
    assert.deepStrictEqual(getResult(['prime','1','2']),[2]);
  });
  it('shouls return an empty array if input is invalid', function() {
    assert.deepStrictEqual(getResult(['square','1','2']),[]);
  });
});

describe('testGetResultOfOperation',function() {
  it('should return sum if operation is sum', function() {
    assert.deepStrictEqual(getResultOfOperation(['sum','6','7']),[13]);
  });
  it('should return fibnacci numbers if operation is fibnacci', function() {
    assert.deepStrictEqual(getResultOfOperation(['fibnacci','1','2']),[1,1,2]);
  });
  it('should return prime numbers if operation is prime', function() {
    assert.deepStrictEqual(getResultOfOperation(['prime','1','2']),[2]);
  });
});
