var MTGClient = require('mtgsdk').card;
var Renderer = require('./renderer');
var Serializer = require('./serializer');

exports.handler = function(event, context) {
  var query = { name: '"' + event.text + '"'};
  MTGClient.where(query).then(function(cards) {
    Serializer.deserialize(cards, function(result) {
      var response = Renderer(result);
      context.succeed({
        response_type: "in_channel",
        text: response
      });
    });
  });
}
