const Discord = require("discord.js");

exports.run = async (client,message,args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Você precisa da permissão `Banir Membros` para executar este comando.")
    let member = message.mentions.members.first()
    if(!member)
    return message.reply("Informe um usuário valído.")
    if(!member.bannable)
    return message.reply("Não posso banir este usuário, pois ele possui um cargo maior que o meu.")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Razão não informada."
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui banir o membro devido o: ${error}`))

      message.delete(3000);

      message.channel.send(`${message.author} usuário punido com sucesso!`)

      let canal = client.channels.get("700078059558273086");


      let pEmbed = new Discord.RichEmbed()
          .setTitle("BAN")
          .setThumbnail(member.user.avatarURL)
          .addField("Membro Banido:", `${member.user.tag}`)
          .addField("Banido por:", `${message.author.tag}`)
          .addField("Motivo:", `${reason}`)
          .setColor("BLUE").setTimestamp()
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)

          canal.send(pEmbed);
	        member.ban.send(`Você foi banido pelo ${message.author.tag} pelo motivo ${reason}`)
          message.author.send(`Você baniu o ${member.user.tag} pelo motivo ${reason} com sucesso! Lembrando que todas as punições são registradas e armazenadas em nosso banco de dados!`);
        
}
module.exports.config = {

    name: "ban",
    aliases: ["banir"]
 
 }