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

client.login("NDM4Mzc1NDgyNjgxOTgyOTg3.DexDKA.wqhthFemMvKPUfmdzQ0Urk3DYik");
