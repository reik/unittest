// List of all test dependencies
require([
  '/ut2/requirejs-unit-testing-mocha/app/test/specs/basicTest.spec.js'
], function() {
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    // Start mocha
    mocha.run();
  }
});
