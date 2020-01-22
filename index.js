const Discord = require('discord.js');
const client = new Discord.Client();
const market = require('steam-market-pricing');
const api_token = process.env.DISCORD_BOT_TOKEN;
var previous_max_price = 0.0;
var ifunc = require('./interval_function');
const Omega = '\u03A9';
const rupee = '\u20A8';
var emoji = require('node-emoji');
emoji.get("coffee");
console.log(emoji.find('pizza')['emoji']);

client.once('ready', () => {
  console.log('Up and running!');
});

var status = client.login(api_token);
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
});

function execute_interval_function(){
  var price, status = ifunc.intervalFunction(previous_max_price);
  if (status == true){
    client.channels.get(process.env.STEAM_MARKET_CHANNEL_ID).send(Omega + '!Price of Shattered Web Case rose to ' + rupee + ' ' + price);
  }
  else{
    //client.channels.get(process.env.STEAM_MARKET_CHANNEL_ID).send(Omega + '--Interval Testing--');
  }
}

var minutes = 5
var seconds = 60 * minutes;
var milliseconds = 1000 * seconds;

setInterval(execute_interval_function, milliseconds);
