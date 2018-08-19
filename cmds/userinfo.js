let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
        let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
            .setDescription("This is some of the info I could find:")
            .setColor("#50ed50")
            .setTimestamp()
            .addField("User's Full Username", `${message.author.username}#${message.author.discriminator}`)
            .addField("ID", `${message.author.id}`)
            .addField("Account created at", `${message.author.createdAt}`)
            .addField("Avatar URL", `${message.author.displayAvatarURL}`)
            .setFooter(`Thanks for using EquippedDroid`, "https://bot.hernikplays.tk/yeetcon.png")
            
            
         message.channel.send({embed: embed});
    
}

module.exports.help = {
    name: "ui"
}