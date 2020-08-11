const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para executar este comando.")

    if(!args[0])  return message.reply("Utilize: /clear <entre 1 e 100>.")

    message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`O chat foi limpo com sucesso =D`).then(msg => msg.delete(5000));

    });
}