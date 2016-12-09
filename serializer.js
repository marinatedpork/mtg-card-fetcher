module.exports = {
  deserialize: function(payload, callback) {
    for (var i = payload.length - 1; i >= 0; i--) {
      if (payload[i].imageUrl) {
        return callback(payload[i]);
        break;
      }
    }    
  }
};
