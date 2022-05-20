const Discord = require("discord.js");
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});


client.once('ready', () => {
    console.log("Donkey online")
})

client.login(process.env.TOKEN)





