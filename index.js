const Discord = require('discord.js');
const client = new Discord.Client();
const market = require('steam-market-pricing');

var data_json = null;
market.getItemPrice(730, 'Shattered Web Case', 24).then(function (item) {
  data_json = item;
  console.log(data_json);
});



client.once('ready', () => {
  console.log('Up and running!');
});

client.login('<token>');

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
