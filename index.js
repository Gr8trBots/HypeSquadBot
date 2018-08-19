const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const prefix = botconfig.prefix;

bot.commands = new Discord.Collection();



fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load! Please add some to the 'cmds' folder!");
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => {
    console.log("Bot is online!");
    
     
      

    bot.user.setActivity(`The House of Balance // hs.help`, {type: 'WATCHING'});
});

bot.on("message", async message => {
       if(message.author.bot) return;
       if(message.channel.type === "dm") return;

       

      

       let messageArray = message.content.split(" ");
       let command = messageArray[0];
       let args = messageArray.slice(1);

       if (!command.startsWith(prefix)) return;    
       
       let cmd = bot.commands.get(command.slice(prefix.length));
       
       
       if(cmd){
        cmd.run(bot, message, args);
        
       } 

});

bot.login(process.env.BOT_TKN); //This is for heroku