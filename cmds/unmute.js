let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.guild.me.hasPermission(['MANAGE_ROLES'])) return message.reply('Missing the required `Manage Roles` permission.');
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You need the 'MANAGE_CHANNELS' permission to do that!");
        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]); 
        if(!toMute) return  message.channel.send("Please mention a user or write his ID!");
        let muteReason = args.join(" ").slice(22);
        if(toMute.id === message.author.id) return message.channel.send("Please do not try to unmute yourself!");
        if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("You cannot unmute a member, who is higher or on the same level as you!");
        
        let role = message.guild.roles.find(r => r.name === "HS Muted");
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.send("This user is not muted!").then(msg => {msg.delete(10000)});
        
        let muteEmbed = new Discord.RichEmbed()
        .setDescription(`:speaker: -Unmute- :speaker:`)
        .setColor("#00b300")
        .addField("Unmuted user", `${toMute} [${toMute.id}]`)
        .addField("Unmuted by", `${message.author.username}`)
        .addField("Unmuted on", `${message.createdAt}`)
        .addField("Unmute Reason", `${muteReason}`)
 
        let muteChannel = message.guild.channels.find(`name`, "mod-log");
        if(!muteChannel) return message.channel.send("Cannot find 'mod-log' channel. Please create one, or report an error (e!error).");
 
        await muteChannel.send({embed: muteEmbed})

        await toMute.removeRole(role);
       
       message.channel.send("I have unmuted the user!").then(msg => {msg.delete(10000)});
       return;
    
}

module.exports.help = {
    name: "unmute"
}