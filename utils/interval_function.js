const market = require('steam-market-pricing')
var fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

async function intervalFunction (previous_max_price, testing) {
  var current_price, price_history;
  var status = 0;

  var promise = market.getItemPrice(730, 'Shattered Web Case', 24).then(function (item) {
    current_price = parseFloat(item['lowest_price'].slice(2));
    price_history = Date().toString() + ',' + current_price;

    if (testing == false){
      let db = new sqlite3.Database('./db/Prices.db', (err) => {
        try{
          if (err) throw err;
          var sql_stmt = 'INSERT INTO swc VALUES("'+ Date().toString()+'", '+ current_price+' );';
          db.run(sql_stmt, function(err){
            try{
              if (err) throw err;
            }catch(err){
              console.error("ERROR: " + err);
              return [current_price, false, 6];
            }
          });
        }catch(err){
          console.error("ERROR: " + err);
          return [current_price, false, 7];
        }
      });
    }

    if (current_price >= 60) {
      return [current_price, true, 0];
    }
    else if(current_price >= 50) {
      return [current_price, true, 10];
    }
    else if (current_price >= (1.1 * previous_max_price)){
      previous_max_price = current_price;
      return [current_price, true, 1];
    }
    else if(current_price >= previous_max_price){
      previous_max_price = current_price;
      return [current_price, false, 2];
    }
    else if(current_price < previous_max_price){
      return [current_price, false, 3];
    }
    else{
      return [previous_max_price, false, 4];
    }
  }).catch(error => {
    console.error("Error: " + error);
    return [previous_max_price, false, 5];
  });

  return promise;

}

module.exports = {
  intervalFunction
}

/*
async function test (){
  var promise = await intervalFunction(0, testing=false);
  console.log("PROMISE: " + JSON.stringify(promise));
}
test()
*/
