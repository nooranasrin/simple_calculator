const getResult = require("./src/performOperations.js").getResult;
const chalk = require("chalk");

const main = function(cmdLineArg) {
  console.log(chalk.red(getResult(cmdLineArg).join("\n")));
};

main(process.argv.slice(2));
