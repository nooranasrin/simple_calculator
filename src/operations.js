const sum = function(start, end, incriment) {
  let rangeStart = Math.min(start, end);
  let rangeEnd = Math.max(start, end);
  let sum = 0;
  for(let curNum = rangeStart; curNum <= rangeEnd; curNum += incriment) {
    sum = sum + curNum;
  }
  return [sum];
};

const isGreaterAndEqual = function(threshold, element) {
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
  return fibNos.filter(isGreaterAndEqual.bind(null,startRange));
};

const isPrime = function(num) {
  let  reminder;
  if(num >= 2 ) {
    for(let denominator = 2;denominator < num ; denominator++) {
      reminder = num % denominator;
      if(reminder == 0) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const prime = function(start, end) {
  let primes = [],numbers = []; 
  if((start <= end || (start >= 0 && end >= 0))) {
    for(let i = start; i<=end; i++) {
      numbers.push(i);
    } 
    primes = numbers.filter(isPrime);
    primes = primes.filter(isGreaterAndEqual.bind(null,start));
  }
  return primes;
};

exports.sum = sum;
exports.fibnacci = fibnacci;
exports.prime = prime;
exports.isPrime = isPrime;
exports.isGreaterAndEqual = isGreaterAndEqual;
