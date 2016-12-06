var cards = require('./fixtures/cards');
var read = require('fs').readFileSync;
var enc = { encoding: 'utf-8' };
var basePath = './tests/fixtures/rendered/';

QUnit.module('Renderer');

test('Renders a creatures', 2, function(assert) {
  var actual = Renderer(cards.creature);
  var expected = read(basePath + 'creature.txt', enc);
  assert.ok(actual.includes('*P/T*: 3/2'), 'has a power and toughness');
  assert.equal(actual, expected);
});

test('Renders a planeswalker', 2, function(assert) {
  var actual = Renderer(cards.planeswalker);
  var expected = read(basePath + 'planeswalker.txt', enc);
  assert.ok(actual.includes('*Loyalty*: 3'), 'has loyalty');
  assert.equal(actual, expected);
});

test('Renders an instant', 1, function(assert) {
  var actual = Renderer(cards.instant);
  var expected = read(basePath + 'instant.txt', enc);
  assert.equal(actual, expected);
});

test('Renders a sorcery', 1, function(assert) {
  var actual = Renderer(cards.sorcery);
  var expected = read(basePath + 'sorcery.txt', enc);
  assert.equal(actual, expected);
});

test('Renders a enchantment', 1, function(assert) {
  var actual = Renderer(cards.enchantment);
  var expected = read(basePath + 'enchantment.txt', enc);
  assert.equal(actual, expected);
});

test('Renders an artifact', 1, function(assert) {
  var actual = Renderer(cards.artifact);
  var expected = read(basePath + 'artifact.txt', enc);
  assert.equal(actual, expected);
});

test('Renders a land', 1, function(assert) {
  var actual = Renderer(cards.land);
  var expected = read(basePath + 'land.txt', enc).trim();
  assert.equal(actual, expected);
});
