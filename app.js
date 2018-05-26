const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDM4Mzc1NDgyNjgxOTgyOTg3.Dertjg.upvCUqtd0-wavG5xMtJ3VIY60YY');
