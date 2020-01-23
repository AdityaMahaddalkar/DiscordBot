const assert = require('chai').assert;
const sqlite3 = require('sqlite3').verbose();

describe('Database Checking', function () {
  it('Database is connected and table is present', function (){
    var flag = true;
    let db = new sqlite3.Database('./db/Prices.db', (err) => {
      if (err) throw err;
    });
    var sql_stmt = 'SELECT datetime, max(price) from swc;';
    var temp = db.get(sql_stmt, function(err, row){
      if (err) throw err;
    });
  });
});
