var newyorker = require('./newyorker_request');
var aldaily = require('./aldaily_request');
const shuffle = require('shuffle-array');
const aldaily_types = aldaily.types;
const newyorker_types = newyorker.types;
const fs = require('fs')

function request_newyorker(type) {
  if (newyorker_types.indexOf(type) == -1) {
    return new Error('Type invalid');
  }
  else{
    newyorker.get_body(type);
    /*
    var array = fs.readFileSync('newyorker_'+type+'_links.txt').toString().split('\n');
    shuffle(array);
    var three_links = array.slice(0, 3);

    three_links.forEach((item, i) => {
      console.log('links: ' + item);
    });
    */
    return null;
  }
}

function request_aldaily(type) {
  if (Object.keys(aldaily_types).indexOf(type) == -1) {
    return new Error('Type invalid');
  }
  else {
    /*
    aldaily.get_body(type);
    var array = fs.readFileSync('aldaily_'+type+'_links.txt').toString().split('\n');
    shuffle(array);
    var three_links = array.slice(0, 3);
    three_links.forEach((item, i) => {
      console.log('links: ' + item);
    });
    */
    return null;
  }
}

module.exports = {
  request_newyorker,
  request_aldaily,
  newyorker_types,
  aldaily_types
}
