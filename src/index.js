const { Client, RichEmbed } = require('discord.js');
const { intervaloSLPprice } = require('./js/funciones');
const tok = 'ODkwMzg0NDQxODYyNjUxOTA0.'
const en = 'YUvBIQ.w0OeZXEW-4SRcJzMR47PqubXmfo'
const name = tok+en
const client = new Client();
// Inicia bot
client.on('ready', () => {
  console.log('Bot Now connected!');
  console.log('Logged In as', client.user.tag);
  client.user.setStatus('online');
  intervaloSLPprice(client)
});
client.login(name);
module.exports= {
  client
}
