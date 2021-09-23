const { Client, RichEmbed } = require('discord.js');
const { intervaloSLPprice } = require('./js/funciones');
const token = 'ODkwMzg0NDQxODYyNjUxOTA0.YUvBIQ.qVthIYmCx5wwwelejuvjUqmdjwA';

const client = new Client();
// Inicia bot
client.on('ready', () => {
  console.log('Bot Now connected!');
  console.log('Logged In as', client.user.tag);
  client.user.setStatus('online');
  intervaloSLPprice(client)
});

module.exports= {
  client
}
