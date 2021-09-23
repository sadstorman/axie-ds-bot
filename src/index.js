const { Client, RichEmbed } = require('discord.js');
const { intervaloSLPprice } = require('./js/funciones');
const tok = 'ODkwMzg0NDQxODYyNjUxOTA0.YUvBIQ'
const en = '.mZOnf13U8wFd9U5kQSMBMaJYIRk'
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
