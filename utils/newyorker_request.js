const request = require('request');
const fs = require('fs');
const DomParser = require('dom-parser');
const pretty = require('pretty');

var types = ['news', 'humor', 'culture', 'books'];


function get_body(type) {
  var options = {
    url: 'https://www.newyorker.com/',
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
    }
  };
  request(options, (err, response, body) => {
    parse_body(body, type);
  });
}

function parse_body (body, type) {
  // function to parse body
  var dom = new DomParser().parseFromString(body);
  //console.log("Type of doc: " + typeof(dom));
  var elements = dom.getElementsByTagName('a');
  let re = new RegExp('/' + type + '/+');
  //console.log('RE: ' + re);
  var news_links = [];
  elements.forEach((item, i) => {
    //console.log('Element: ' + JSON.stringify(item.attributes))
    var link_str = item.getAttribute('href');
    if (re.test(link_str)) {
      news_links.push('https://www.newyorker.com'+link_str);
    }
  });
  news_links = new Set(news_links);
  //console.log('---------------------------------------------');
  var links_string = '';
  news_links.forEach((item, i) => {
    item += '\n';
    links_string += item;
  });
  fs.writeFile('../weblinks/newyorker_'+type+'_links.txt', links_string, (err) => {
    if (err) console.error("ERROR: NewYorker file write : " + err);
    //console.log("FILE writing successful");
  })

}

//test
//get_body(type=types[1]);

module.exports = {
  get_body,
  types,
  parse_body
}
