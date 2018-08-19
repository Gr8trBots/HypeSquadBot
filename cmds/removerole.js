const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.guild.me.hasPermission(['MANAGE_MEMBERS'])) return message.reply('Missing the required `Manage members` permission.');
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You need the 'MANAGE_MEMBERS' permission to do that!");
 
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role!");

  if(!rMember.roles.has(gRole.id)) return message.reply("User does not have that role.");
  await(rMember.removeRole(gRole.id));

 
    message.channel.send(`<@${rMember.id}> has lost the ${gRole.name} role.`).then(msg => {msg.delete(10000)});
  

  
}

module.exports.help = {
    name: "remrole"
}