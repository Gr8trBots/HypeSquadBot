let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("No current events/challenges")
            .setColor("#000000")
            .setFooter(`Got something wrong? Report bug with hs.error`)

            message.channel.send({embed: embed});
}

module.exports.help = {
    name: "events"
}