const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const dblmoji = bot.emojis.find("name", "discordbots");
const lc = bot.emojis.find("name", "listcord");
const botspace = bot.emojis.find("name", "botlistspace");
const comp = bot.emojis.find("name", "computer_bsod");
const gh = bot.emojis.find("name", "github");
const up = bot.emojis.find("name", "upvote");
const discordbotworld = bot.emojis.find("name", "discordbotworld");
const beach = bot.emojis.find("name", "BeachBall");
let uptime = (bot.uptime / 1000 / 60);
    let m = new Discord.RichEmbed()
    .setTitle("About")
    .setDescription("Here is some info about this bot!")
    .setColor("RANDOM")
    .addField("📝 Bot Name", "TerrariaBot", true)
    .addField(`${comp} Bot created by`, "hernikplays#4673", true)
    .addField("📚 Library used", "discord.js", true)
    .addField("❗ Prefix", "hs.", true)
    .addField(`${gh} Open Source`, "[Yes](https://github.com/discordies/HypeSquadBot)",true)
    .addField("🔎 Version", "1.0", true)
    .addField(`${beach} Playing in`, `${bot.guilds.size} servers`, true)
    .addField("⬆ Uptime", `${uptime.toFixed(2)}min`, true)
    .setFooter("This bot is not affiliated with Discord", "https://discordemoji.com/assets/emoji/HypeSquad.png")
    message.channel.send(m).then(msg => {msg.delete(100000)});
  
}

module.exports.help = {
    name: "stats"
}