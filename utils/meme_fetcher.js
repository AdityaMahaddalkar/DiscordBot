const request = require('request');
const fs = require('fs');
const REDDIT_URL = 'https://api.reddit.com/';
const fetch = require("node-fetch");
const IMAGE_OUTPUT_FOLDER = '../images/';
var subreddits = ['r/dankmemes'];

var download = function(uri, filename, output_folder, callback){
  request.head(uri, function(err, res, body){
    //console.log('content-type:', res.headers['content-type']);
    //console.log('content-length:', res.headers['content-length']);
    let extension;
    if(res.headers['content-type'] == 'image/png'){
      extension = '.png';
    }
    else if(res.headers['content-type'] == 'image/jpg' || res.headers['content-type'] == 'image/jpeg'){
      extension = '.jpg';
    }
    else if(res.headers['content-type'] == 'text/html' || res.headers['content-type'] == 'text/html; charset=utf-8'){
      //console.log('---------------------');
      //console.log(body);
      //console.log('---------------------');
      extension = '.html';
    }
    else if(res.headers['content-type'] == 'image/gif') {
      extension = '.gif';
    }
    else {
      console.log('Extension not yet known');
    }
    request(uri).pipe(fs.createWriteStream(output_folder+filename+extension)).on('close', callback);
  });
};

function fetch_json(subreddit, output_folder) {
  fetch(REDDIT_URL+subreddit+'?sort=hot&limit=100')
  .then(response => response.json())
  .then(response => {
    parse_body(response, output_folder);
  });
  console.log('LOG: Memes saved to :' + output_folder);
}

function parse_body(body, output_folder) {
  var image_urls = [];
  try{
    body['data']['children'].forEach((item, i) => {
      image_urls.push(item['data']['url']);
    });
    console.log('Fetching dank memes');
    image_urls.forEach((item, i) => {
      //console.log(item);
      download(item, i, output_folder, () => {
        //console.log('Done ' + item);
      })
    });
  }catch(err){
    console.error(err);
  }
}

module.exports = {
  fetch_json,
  parse_body,
  subreddits
}

//test
//fetch_json(subreddits[0])
