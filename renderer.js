var Symbols = require('./symbols');

module.exports = function(card) {
  var view = "";
  view += card.imageUrl;
  view += '\n*' + card.name + '*';
  view += '\n*Mana cost*: ' + (card.manaCost || '');
  view += '\n*Type*: ' + card.type;
  view += '\n\n' + (card.text || '') + '\n';
  if (card.power) {
    view += '\n*P/T*: ' + card.power + '/' + card.toughness;
  }
  if (card.loyalty) {
    view += '\n*Loyalty*: ' + card.loyalty;
  }
  return Symbols(view);
}