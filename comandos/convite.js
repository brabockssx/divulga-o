const Discord = require("discord.js")

exports.run = (bot,message,args) => {
    let embed = new Discord.RichEmbed()

    .setTitle(" Convite do bot")
    .setColor("#0000FF")
    .setDescription(`**Clique [aqui](https://discordapp.com/api/oauth2/authorize?client_id=707233662071996544&permissions=0&scope=bot) para adicionar o bot em seu servidor**`)
    .setFooter(`${bot.user.username}`, bot.user.avatarURL)
    .setTimestamp()

    message.channel.send(embed);
}

exports.help = {
    name: "convite"
}