let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const blobkick = bot.emojis.find("name", "blobsalute");
    if (!message.guild.me.hasPermission(['KICK_MEMBERS'])) return message.reply('Missing the required `Kick Members` permission.');
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You need the 'KICK_MEMBERS' permission to do that!");
        let toKick = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]); 
        if(!toKick) return  message.channel.send("Please mention a user or write his ID!");
        let kickReason = args.join(" ").slice(22);
        if(toKick.id === message.author.id) return message.channel.send("You cannot kick yourself!");
        if(toKick.highestRole.position >= message.member.highestRole.position) return message.channel.send("You cannot kick a member, who is higher or on the same level as you!");
        let kickEmbed = new Discord.RichEmbed()
        .setDescription(` -Kick- `)
        .setColor("#ffa500")
        .addField("Kicked user", `${toKick} [${toKick.id}]`)
        .addField("Kicked by", `${message.author.username}`)
        .addField("Kicked on", `${message.createdAt}`)
        .addField("Kick Reason", `${kickReason}`)

        let kickChannel = message.guild.channels.find(`name`, "mod-log");
        if(!kickChannel) return message.channel.send("Cannot find 'mod-log' channel. Please create one, or report an error.");

        message.guild.member(toKick).kick(kickReason);
        await kickChannel.send({embed: kickEmbed});
        message.channel.send("I have kicked the user").then(msg => {msg.delete(10000)});
        return;
}

module.exports.help = {
    name: "kick"
}