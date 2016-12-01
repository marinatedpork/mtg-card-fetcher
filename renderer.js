module.exports = function(card) {
  var view = "";
  view += card.imageUrl;
  view += '\n*' + card.name + '*';
  view += '\nMana cost: ' + (card.manaCost || '').replace(/[{}]/g, '');
  view += '\nType: ' + card.type;
  view += '\n' + (card.text || '');
  if (card.power) {
    view += '\nPower/Toughness: ' + card.power + ' / ' + card.toughness;
  }
  if (card.loyalty) {
    view += '\nLoyalty: ' + card.loyalty;
  }
  return view;
}