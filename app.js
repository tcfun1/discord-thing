// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will trigger whenever your bot:
// - finishes logging in
// - reconnects after disconnecting
client.on('ready', () => {
    if (message.content === '!ping') {
    // send back "Pong." to the channel the message was sent in
    message.channel.send('Pong.');
}
});

// login to Discord with your app's token
client.login('MrwHMF_ibVQK8lF2AnZtvszRBy5ohAXM');
