const assert = require('chai').assert;
const ifunc = require('../interval_function');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Interval Function', function() {
  it('if current price >= previos max x 1.1 then it should return current and true', function() {
    assert.equal(ifunc.intervalFunction(0)[1], true);
  });
  it('if current price > previous max then it should replace previous max with current', function() new Promise(function(resolve, reject) {
    test_current, status = ifunc.intervalFunction(0);
    if (status == false) throw console.error('Steam market status error');
    assert.equal(ifunc.intervalFunction())
  });)
})
