var testrunner = require('qunit');

testrunner.run({
  code: {
    path: 'symbols.js',
    namespace: 'Symbols'
  },
  tests: "tests/symbols-test.js"
});