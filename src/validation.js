const isLengthValid = function(length) {
  return length == 4 || length == 3;
};

const isOperationValid = function(cmdLineOperation) {
  const operation = { operations: ["sum", "prime", "fibnacci"] };
  return operation["operations"].includes(cmdLineOperation);
};

const isANumber = function(num) {
  return +num;
};

const isValidNumber = function(numbers) {
  return numbers.filter(isANumber).length == numbers.length;
};

exports.isLengthValid = isLengthValid;
exports.isOperationValid = isOperationValid;
exports.isANumber = isANumber;
exports.isValidNumber = isValidNumber;
