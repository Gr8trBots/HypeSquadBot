const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.guild.me.hasPermission(['MANAGE_MEMBERS'])) return message.reply('Missing the required `Manage MEMBERS` permission.');
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You need the 'MANAGE_MEMBERS' permission to do that!");
 
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  
    message.channel.send(`<@${rMember.id}> has been given the role ${gRole.name}.`).then(msg => {msg.delete(10000)});
  
  
}

module.exports.help = {
    name: "addrole"
}