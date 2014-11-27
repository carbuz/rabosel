function yahoo_get(ticker) {
  $.getJSON( "/api/yahoo_get?ticker=" + ticker, function( data ) {
    console.log(data)
  });
}
