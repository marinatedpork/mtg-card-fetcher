var MTGClient = require('mtgsdk').card;
var Renderer = require('./renderer');
var Serializer = require('./serializer');
var ERROR_MESSAGE = '*No results from the AEther*. (Hint: include all punctuation in the card\'s name, e.g. "narset enlightened master" should be "narset, enlightened master")'

exports.handler = function(event, context) {
  console.log('Received:', event);
  var query = { name: '"' + event.text + '"'};
  console.log('Query:', query);
  MTGClient.where(query).then(function(cards) {
    console.log('Deserializing:', cards);
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
      context.succeed({ text: ERROR_MESSAGE })
    }
  });
}
