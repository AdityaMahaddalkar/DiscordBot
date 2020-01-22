const market = require('steam-market-pricing')
var fs = require('fs');

function intervalFunction (previous_max_price) {
  market.getItemPrice(730, 'Shattered Web Case', 24).then(function (item) {
    current_price = parseFloat(item['median_price'].slice(2));
    price_history = Date().toString() + ',' + current_price;
    fs.appendFile('priceHistory.txt', price_history + '\n', function (err){
      if (err) throw err;
      console.log('Saved');
    })
    if ( (current_price - previous_max_price)/previous_max_price >= 0.1 ){
      previous_max_price = current_price;
      return current_price, true;
    }
    else if(previous_max_price <= current_price){
      previous_max_price = current_price;
      return current_price, false;
    }
    else{
      return current_price, false;
    }
  });
}

module.exports = {
  intervalFunction
}
