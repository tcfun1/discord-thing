const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
// login to Discord with your app's token
client.login('MrwHMF_ibVQK8lF2AnZtvszRBy5ohAXM');
