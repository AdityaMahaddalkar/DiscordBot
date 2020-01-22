const Discord = require('discord.js');
const client = new Discord.Client();
const market = require('steam-market-pricing');
const api_token = process.env.DISCORD_BOT_TOKEN;
var previous_max_price = 0.0;
var ifunc = require('./interval_function');
const Omega = '\u03A9';
const rupee = '\u20A8';
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
});

function execute_interval_function(){
  var price, status = ifunc.intervalFunction(previous_max_price);
  if (status == true){
    client.channels.get(process.env.STEAM_MARKET_CHANNEL_ID).send(Omega + '!Price of Shattered Web Case rose to ' + rupee + ' ' + price);
  }
  else{
    client.channels.get(process.env.STEAM_MARKET_CHANNEL_ID).send(Omega + '--Interval Testing--');
  }
}

var minutes = 5
var seconds = 60 * minutes;
var milliseconds = 1000 * seconds;

setInterval(execute_interval_function, milliseconds);
