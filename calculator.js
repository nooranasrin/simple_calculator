const getResult = require('./src/performOperations.js').getResult;

const main = function(cmdLineArg) {
  console.log(getResult(cmdLineArg).join('\n'));
};

main(process.argv.slice(2));
