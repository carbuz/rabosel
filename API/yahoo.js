module.exports = {
  yahoo_get: function(callback, data) {
    //richiedo roba async
    console.log("get", data);
    callback(null, { foo: 'bar', ticker: data.ticker });
  }
}