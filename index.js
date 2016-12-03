var MTGClient = require('mtgsdk').card;
var Renderer = require('./renderer');
var Serializer = require('./serializer');

exports.handler = function(event, context) {
  console.log('Received:', event);
  var query = { name: '"' + event.text + '"'};
  console.log('Query:', query);
  MTGClient.where(query).then(function(cards) {
    console.log('Received data, attempting to process deserialize', cards);
    Serializer.deserialize(cards, function(result) {
      console.log('Deserialized:', result);
      var response = Renderer(result);
      console.log('Rendered:', response);
      context.succeed({
        response_type: "in_channel",
        text: response
      });
    });
  });
}
