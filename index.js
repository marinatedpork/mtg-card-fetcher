var MTGClient = require('mtgsdk').card;
var MTGCardRenderer = require('mtg-card-renderer');
var Renderer = MTGCardRenderer.Renderer;
var Serializer = MTGCardRenderer.Serializer;

function errorMessage(card) {
  return '*No results for "'+ card + '"*. (Hint: include all punctuation in the card\'s name, e.g. "narset enlightened master" should be "narset, enlightened master")';
} 

exports.handler = function(event, context) {
  console.log('Received:', event);
  var query = { name: '"' + event.text + '"'};
  MTGClient.where(query).then(function(cards) {
    var success = Serializer.deserialize(cards, function(result) {
      console.log('Deserialized:', result);
      var response = Renderer(result);
      console.log('Rendered:', response);
      context.succeed({
        response_type: 'in_channel',
        text: response
      });
      return true;
    });
    if (!success) {
      context.succeed({ text: errorMessage(event.text) });
    }
  });
}
