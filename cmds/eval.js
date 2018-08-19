const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if (message.author.id !== '145973959127597057' && message.author.id !== '145973959127597057') return message.channel.send("You crazy?");
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Evaluate')
        .setColor('RANDOM')
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
  
}

module.exports.help = {
    name: "eval"
}