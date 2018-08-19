let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const banham = bot.emojis.find("name", "BlobBanhammer");
    if (!message.guild.me.hasPermission(['BAN_MEMBERS'])) return message.reply('Missing the required `Ban Members` permission.');
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need the 'BAN_MEMBERS' permission to do that!");
        let toBan = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]); 
        if(!toBan) return  message.channel.send("Please mention a user or write his ID!");
        let banReason = args.join(" ").slice(22);
        if(toBan.id === message.author.id) return message.channel.send("You cannot ban yourself!");
        if(toBan.highestRole.position >= message.member.highestRole.position) return message.channel.send("You cannot ban a member, who is higher or on the same level as you!");
        let banEmbed = new Discord.RichEmbed()
        .setDescription(` -Ban- `)
        .setColor("#ff0000")
        .addField("Banned user", `${toBan} [${toBan.id}]`)
        .addField("Banned by", `${message.author.username}`)
        .addField("Banned on", `${message.createdAt}`)
        .addField("Ban Reason", `${banReason}`)

        let banChannel = message.guild.channels.find(`name`, "mod-log");
        if(!banChannel) return message.channel.send("Cannot find 'mod-log' channel. Please create one, or report an error (e!error).");

        message.guild.member(toBan).ban(banReason);
        banChannel.send({embed: banEmbed});
        message.channel.send("I have banned the user").then(msg => {msg.delete(10000)});

        return;
}

module.exports.help = {
    name: "ban"
}