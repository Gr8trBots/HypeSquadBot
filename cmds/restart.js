const Discord = module.require("discord.js");
const botconfig = require("../botconfig.json");
module.exports.run = async (bot, message, args) => {
    
    if (message.author.id !== '145973959127597057' && message.author.id !== '145973959127597057') return message.channel.send("*Oh hey. You suck!* - Scout");
    message.channel.send("You have *got* to be kidding me!").then(msg => {
        msg.delete(2000)
    });
    bot.destroy();
    bot.login(process.env.BOT_TOKEN);
    message.channel.send("Hey! Back from the dead!").then(msg => {
        msg.delete(5000)
    });
}

module.exports.help = {
    name: "restart"
}