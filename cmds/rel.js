const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '145973959127597057' && message.author.id !== '145973959127597057') return message.channel.send("Not now!");
    if(!args[0] || args.size < 1) return message.reply("Must provide a command name to reload.");
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`The command ${args[0]} has been reloaded`);
  
}

module.exports.help = {
    name: "rel"
}