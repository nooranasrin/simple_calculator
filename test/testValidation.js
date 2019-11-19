const assert = require('assert');
const isLengthValid = require('../src/validation').isLengthValid;
const isOperationValid = require('../src/validation').isOperationValid;
const isANumber = require('../src/validation').isANumber;
const isValidNumber = require('../src/validation').isValidNumber;

describe('testIsLengthValid',function() {
  it('should return true if length = 4', function() {
    assert.ok(isLengthValid(4));
  });
  it('should return true if length = 3', function() {
    assert.ok(isLengthValid(3));
  });
  it('should return false if length is not 3 or 4', function() {
    assert.ok(!isLengthValid(5));
  });
});

describe('testIsOperationValid', function() {
  it('should return true if operation is sum', function() {
    assert.ok(isOperationValid('sum'));
  });
  it('should return true if operation is fibnacci', function() {
    assert.ok(isOperationValid('fibnacci'));
  });
  it('should return true if operation is prime', function() {
    assert.ok(isOperationValid('prime'));
  });
  it('should return false if operation is not sum, fibnacce or prime', function() {
    assert.ok(!isOperationValid('multiply'));
  });
});

describe('testIsANumber', function() {
  it('should return true if the string is an integer', function() {
    assert.ok(isANumber('3'));
  });
  it('should return true if the string is a -ve number', function() {
    assert.ok(isANumber('-3'));
  });
  it('should return true if the string is a floating point number', function() {
    assert.ok(isANumber('3.78'));
  });
  it('should return false if the string contains anything other than numbers', function() {
    assert.ok(!isANumber('hai'));
  });
});

describe('testIsValidNumber', function() {
  it('should return true if the array contains only numbers', function() {
    assert.ok(isValidNumber(['1','2','3']));
  });
  it('should return false if the array contains anything other than numbers', function() {
    assert.ok(!isValidNumber(['sum']));
  });
});
