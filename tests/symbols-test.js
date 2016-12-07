QUnit.module('Symbols');

test('Replaces repeated symbols', 1, function(assert) {
  var actual = Symbols('{W}{W}{0}{0}{2/U}{2/U}');
  assert.equal(actual, ':w::w::0g::0g::2g-u::2g-u:');
});
