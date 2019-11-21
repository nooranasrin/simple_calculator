const isLengthValid = require("./validation").isLengthValid;
const isOperationValid = require("./validation").isOperationValid;
const isANumber = require("./validation").isANumber;
const isValidNumber = require("./validation").isValidNumber;
const sum = require("./operations.js").sum;
const fibnacci = require("./operations.js").fibnacci;
const prime = require("./operations.js").prime;

const getResultOfOperation = function(cmdLineArg) {
  const operations = { sum: sum, fibnacci: fibnacci, prime: prime };
  let incriment = +cmdLineArg[3] || 1;
  return operations[cmdLineArg[0]](+cmdLineArg[1], +cmdLineArg[2], incriment);
};

const getResult = function(cmdLineArg) {
  let isValidLength = isLengthValid(cmdLineArg.length);
  let isValidOperation = isOperationValid(cmdLineArg[0]);
  let isNumberValid = isValidNumber(cmdLineArg.slice(1));
  if (isValidLength && isValidOperation && isNumberValid) {
    return getResultOfOperation(cmdLineArg);
  }
  return [];
};

exports.getResult = getResult;
exports.getResultOfOperation = getResultOfOperation;
