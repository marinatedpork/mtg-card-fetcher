var Symbols = require('./symbols');

function Renderer(card) {
  var view = card.imageUrl;
  view += '\n*' + card.name + '*';
  if (card.manaCost) {
    view += '\n*Mana cost*: ' + card.manaCost;
  }
  view += '\n*Type*: ' + card.type;
  if (card.text) {
    view += '\n\n' + card.text + '\n';
  }
  if (card.power) {
    view += '\n*P/T*: ' + card.power + '/' + card.toughness;
  }
  if (card.loyalty) {
    view += '\n*Loyalty*: ' + card.loyalty;
  }
  return Symbols(view).trim();
}

module.exports = Renderer;
