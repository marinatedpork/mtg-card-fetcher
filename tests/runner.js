var testrunner = require('qunit');

var tests = [
  {
    code: {
      path: 'renderer.js',
      namespace: 'Renderer'
    },
    tests: "tests/renderer-test.js"
  },
  {
    code: {
      path: 'symbols.js',
      namespace: 'Symbols'
    },
    tests: "tests/symbols-test.js"
  }
];

tests.forEach(function(test) {
  testrunner.run(test);
});
