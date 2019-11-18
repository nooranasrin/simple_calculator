const sum = function(start, end, incriment) {
  let rangeStart = Math.min(start, end);
  let rangeEnd = Math.max(start, end);
  let sum = 0;
  for(let curNum = rangeStart; curNum <= rangeEnd; curNum += incriment) {
    sum = sum + curNum;
  }
  return sum;
};

const getGreaterAndEqual = function(threshold, element) {
  return element >= threshold;
};

const fibnacci = function(start, end) {
  let startRange = Math.max(0,start);
  let endRange = end,  current = 0;
  let next = 1, sum = 0, fibNos = [];
  while(current <= endRange) {
    fibNos.push(current);
    sum = current + next;
    current = next;
    next = sum;
  }
  return fibNos.filter(getGreaterAndEqual.bind(null,startRange));
};

exports.sum = sum;
exports.fibnacci = fibnacci;
