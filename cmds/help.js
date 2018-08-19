let Discord = module.require("discord.js");
const theprefix = "hs." // Here it is just so I don't have to rewrite the footer
module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Here is a list of all avalible commands:")
            .setColor("#a985c4")
            .addField("about", "About HypeSquad")
            .addField("ui", `Writes info about you.`)
            .addField("events", "On-going events")
            .addField("stats", "Show some bot stats")
            .addField("help", `Displays all commands`)
            .addField("ping", `Pong!`)
            .addField("tr <from:iso> <to:iso> sentence", "Translates something using Google Translate")
            .addField("error", "Gives a link to the support server + bug tracker")
            .addField("== ADMIN COMMANDS ==", "These commands can only be ran by Admins")
            .addField("kick <@user> <reason>", "Kick a user and log to mod-log")
            .addField("ban <@user> <reason>", "Ban a user and log to mod-log")
            .addField("mute <@user> <reason>", "Mutes a user and log to mod-log")
            .addField("unmute <@user> ", "Unmutes a user")
            .addField("addrole <@user>", "Gives a user a role")
            .addField("remrole <@user>", "Removes a role from a user")
            .setFooter(`Bot Prefix: ${theprefix} -- <required> [optional] -- Bot is still in development, any bugs to ${theprefix}error -- created by hernikplays#4673`)
          
            await message.channel.send({embed: embed});
            
}

module.exports.help = {
    name: "help"
}