const Discord = require('discord.js');
const client = new Discord.Client();
const market = require('steam-market-pricing');
const api_token = process.env.DISCORD_BOT_TOKEN;
var ifunc = require('./interval_function');
const Omega = '\u03A9';
const rupee = '\u20A8';
const emoji = require('node-emoji');
const sqlite3 = require('sqlite3').verbose()
var previous_max_price;

module.exports = {
  execute_interval_function
}

client.once('ready', () => {
  console.log('Up and running!');
});

var status = client.login(api_token).catch(err => {console.error("ERROR: " + err);});

console.log(status);

client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('Pong.');
  }
  else if (message.content === '!status') {
    message.channel.send('LOG: Status is up and running : '+Date().toString());
  }
  else if(message.content === '!price') {
    market.getItemPrice(730, 'Shattered Web Case', 24).then(function (item) {
      message.channel.send('DATE: ' + Date().toString());
      message.channel.send('PRICE: Price of Shattered Web Case is ' + item['median_price']);
    });
  }
  else if(message.content === '!hungry') {
    message.channel.send('FOOD: Have some ' + emoji.find('pizza')['emoji']);
  }
  else if(message.content === '!random') {
    message.channel.send('RANDOM: Processing random emoji');
    for (var i = 0;i < 10;i ++){
      message.channel.send(emoji.random()['emoji']);
    }
  }
  else if(message.content === '!maxprice') {
    let db = new sqlite3.Database('./db/Prices.db', (err) => {
      if (err) throw err;
      var sql_stmt = 'SELECT datetime, max(price) from swc;';
      db.get(sql_stmt, [], (err, row) => {
        if(err) throw err;
        console.log(row);
        var date = row['DATETIME'];
        var price = row['max(price)'];
        message.channel.send('--Maximum Price--')
        message.channel.send('DATE TIME: ' + date);
        message.channel.send('Price of Shattered Web Case: ' + rupee + ' ' + price);
      });
    });
  }
});

async function execute_interval_function(){

  let db = new sqlite3.Database('./db/Prices.db', (err) => {
    try{
      if (err) throw err;
      console.log('LOG: Connected to Prices database');
      var sql_stmt = 'SELECT max(price) from swc;';

      db.get(sql_stmt, [], (err, row) => {
        try{
          if (err) throw err;
          console.log(row);
          previous_max_price = row['max(price)'];
        }catch(err){
          console.error("ERROR: " + err);
        }
      })
    }catch(err){
      console.error("ERROR: " + err);
    }
  });

  var promise = await ifunc.intervalFunction(previous_max_price, testing=false);
  console.log('LOG: [Promise] = ' + JSON.stringify(promise));
  var status = promise[1];
  var error = promise[2];
  if (status == true){
    client.channels.get(process.env.STEAM_MARKET_CHANNEL_ID).send(emoji.find('large_blue_circle')['emoji'] + '!Price of Shattered Web Case rose to ' + rupee + ' ' + price);
  }
  else if(status == false && error != 5){
    client.channels.get(process.env.STEAM_MARKET_CHANNEL_ID).send(emoji.find('ok_hand')['emoji'] + '--Interval Testing--');
  }
  else if(error >= 5){
    client.channels.get(process.env.STEAM_MARKET_CHANNEL_ID).send(emoji.find('red_circle')['emoji'] + 'ERROR occured while querying Steam: Invalid item name');
  }
}

var minutes = 5
var seconds = 60 * minutes;
var milliseconds = 1000 * seconds;

setInterval(execute_interval_function, milliseconds);
//execute_interval_function();
