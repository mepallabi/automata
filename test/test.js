const chai = require("chai");
const assert = chai.assert;
const Tuple = require("../src/tuple.js");
const Dfa = require("../src/dfa.js");
const Nfa = require("../src/nfa.js");
const chalk = require('chalk');

let testCases = require("../foo.json");

let filteredTestCases = testCases.filter(x => (["dfa", "nfa"].indexOf(x.type.toLowerCase()) !== -1));

const typeMapper = {
  'dfa': Dfa,
  'nfa': Nfa
};

const generateFn = function (type, tuple, shouldWorkOrFail) {
  return (verificationCase) => {
    const verification = `${type.toUpperCase()} Test should ${shouldWorkOrFail === false ? 'not ' : ''}accept for input ${verificationCase}.`;
    console.log(chalk.gray("\t" + verification));
    var actualResult;
    try {
      const result = new typeMapper[type](tuple);
      actualResult = result.doesAccept(verificationCase);
      assert.equal(actualResult, shouldWorkOrFail, chalk.red(`${verification} Expected was ${shouldWorkOrFail}, But was ${actualResult}.`));
    } catch (error) {
      console.log(chalk.red(`${verification} Expected was ${shouldWorkOrFail}, But was ${actualResult}.`));
    }
  }
};

filteredTestCases.forEach(testCase => {
  console.log(chalk.green('-----------START TEST-------------------'));
  console.log("  " + testCase.name);
  const temptuple = testCase.tuple;
  const tuple = new Tuple(temptuple.states, temptuple.alphabets, temptuple.delta,
    temptuple['start-state'], temptuple['final-states']);

  const passingCases = testCase["pass-cases"];
  const failingCases = testCase["fail-cases"];

  const passingCallback = generateFn(testCase.type, tuple, true);
  const failingCallback = generateFn(testCase.type, tuple, false);

  passingCases.forEach(passingCallback);
  failingCases.forEach(failingCallback);

  console.log(chalk.green('-----------END TEST-------------------'));
});
