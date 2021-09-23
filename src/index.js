const { Client, RichEmbed } = require('discord.js');
const { intervaloSLPprice } = require('./js/funciones');
require('dotenv').config();

const client = new Client();
// Inicia bot
client.on('ready', () => {
  console.log('Bot Now connected!');
  console.log('Logged In as', client.user.tag);
  client.user.setStatus('online');
  intervaloSLPprice(client)
});
client.login(process.env.DISCORD_TOKEN);
module.exports= {
  client
}
