const assert = require('chai').assert;
const ifunc = require('../interval_function');
const sqlite3 = require('sqlite3').verbose();

/*

describe('Interval Function', function() {

  it('If current price >= (previous max x 1.1) then it should return status true and code 1', async function() {
    var promise = await ifunc.intervalFunction(previous_max_price=0, testing=true);
    //assert.equal(promise[1], true, "Status is true");
    assert.equal(promise[2], 1, "Code is 1");
  });

  it('If previous_max_price > current_price then it should return status false and code 3', async function() {
    var promise = await ifunc.intervalFunction(previous_max_price=100000, testing=true);
    assert.equal(promise[1], false, "Status is false");
    //assert.equal(promise[2], 3, "Code is 3");
  });


  
  it('If current price >= previous max then it should replace previous max with current and false status', async function() {
    var max_price = 0;
    var flag = true;
    let db = new sqlite3.Database('./db/Prices.db', (err) => {
      try{
        if (err) throw err;
        var sql_stmt = 'SELECT datetime, max(price) from swc;';
        db.get(sql_stmt, function(err, row){
          try{
            if (err) throw err;
            max_price = row['max(price)'];
            console.log('ROW: ' + JSON.stringify(row));
            console.log('MAX: ' + max_price);
          }catch(err){
            flag = false;
          }
        });
      }catch(err){
        flag = false;
      }
    });

    var promise = await ifunc.intervalFunction(previous_max_price=max_price, testing=true);
    assert.equal(promise[1], false);
    assert.equal(promise[2], )
  });

});

*/
