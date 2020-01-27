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
    return null;
  }
}

function request_aldaily(type) {
  if (Object.keys(aldaily_types).indexOf(type) == -1) {
    return new Error('Type invalid');
  }
  else {
    aldaily.get_body(type);
    return null;
  }
}

module.exports = {
  request_newyorker,
  request_aldaily,
  newyorker_types,
  aldaily_types
}
