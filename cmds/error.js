let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("If you would like to report an error, or need help with something around the bot, join the support server: https://discord.gg/47RnQ2a or try the *new* [BugTracker](https://www.botempire.tk/bugs)")
            .setColor("#000000")
            .setFooter(`Thank you for using EquippedDroid!`)

            message.channel.send({embed: embed});
}

module.exports.help = {
    name: "error"
}