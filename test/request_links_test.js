const assert = require('chai').assert;
const rlinks = require('../request_links');

describe('Request Link Tests', function () {

  it('Check if newyorker/news links are being stored in file newyorker_links.txt and error is returned as null', function () {
    var err = rlinks.request_newyorker('news');
    assert.equal(err, null);
  });

  it('Check if newyorker/humor links are being stored in file newyorker_links.txt and error is returned as null', function () {
    var err = rlinks.request_newyorker('humor');
    assert.equal(err, null);
  });

  it('Check if newyorker/books links are being stored in file newyorker_links.txt and error is returned as null', function () {
    var err = rlinks.request_newyorker('books');
    assert.equal(err, null);
  });


  it('Check if newyorker/culture links are being stored in file newyorker_links.txt and error is returned as null', function () {
    var err = rlinks.request_newyorker('culture');
    assert.equal(err, null);
  });

  it('Check if aldaily/articles links are being stored in file aldaily_links.txt and error is returned as null', function () {
    var err = rlinks.request_aldaily('articles');
    assert.equal(err, null);
  });

  it('Check if aldaily/essays links are being stored in file aldaily_links.txt and error is returned as null', function () {
    var err = rlinks.request_aldaily('essays');
    assert.equal(err, null);
  });

  it('Check if aldaily/books links are being stored in file aldaily_links.txt and error is returned as null', function () {
    var err = rlinks.request_aldaily('books');
    assert.equal(err, null);
  });

});
