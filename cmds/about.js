let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("So... what even is hypesquad? ")
            .setColor("#7289DA")
            .addField("History", "Long ago, a great evil spirit woke, from a long sleep. It knew nothing but destruction, so humanity was pretty 💀. \nUntil a young sage... cool sage, found a weird totem of an unusual animal. I forgot what it's called... *it'sa wumpus!* And the sage touched the thing! When he touched it, this crazy light just came out of it, and flew up in the sky, and hurt the evil spirit! It was pretty cool! A person was there!\nAnd then out of the light, three heroes emerged... to fight the evil spirit! And they did, and they won this time! And after that, the humanity was **SO** hyped, that they formed three houses, to celebrate the victories of the heroes against the evil dudes! Today, the houses are collectively known as the **HypeSquad**. \n- Got from An Old Scroll found on [YouTube](https://www.youtube.com/watch?v=SWzB1mx2o5k)")
            .addField("Houses", "Three houses have been created: Bravery, Briliance and Balance!")
            .addField("Bravery", "*The universe needs people to lead the charge with confident optimism and tenacity. Without the brave, the HypeSquad would descend into chaos.*")
            .addField("Brilliance", "*It takes patience and discipline to become a vital member of the universe. Without brilliance, the HypeSquad would descend into chaos.*")
            .addField("Balance", "*Harmony and poise are necessary to create equilibrium in the universe. Without balance, the HypeSquad would descend into chaos.*")
            .setImage("https://s8.postimg.cc/uuwxad9h1/Screen_Shot_2018-08-16_at_2.28.06_PM.png")
            .setFooter(`Not in HypeSquad? Head over to User Settings > HypeSquad`, "https://discordemoji.com/assets/emoji/HypeSquad.png")

            message.channel.send({embed: embed});
}

module.exports.help = {
    name: "about"
}