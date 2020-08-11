const Discord = require("discord.js");

exports.run = async (client,message,args) => {
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("Você precisa da permissão `Expulsar Membros` para executar este comando.")
    let member = message.mentions.members.first()
    if(!member)
    return message.reply("Informe um usuário valído.")
    if(!member.kick)
    return message.reply("Não posso kickar este usuário, pois ele possui um cargo maior que o meu.")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Razão não informada."
    await member.kick(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui kickar o membro devido o: ${error}`))

      message.delete(3000);

      message.channel.send(`${message.author} usuário punido com sucesso!`)

      let canal = client.channels.get("700078059558273086")


      let pEmbed = new Discord.RichEmbed()
          .setTitle("KICK")
          .setThumbnail(member.user.avatarURL)
          .addField("Membro Kickado:", `${member.user.tag}`)
          .addField("Kickado por:", `${message.author.tag}`)
          .addField("Motivo:", `${reason}`)
          .setColor("BLUE").setTimestamp()
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)

          canal.send(pEmbed);
	        member.kick.send(`Você foi expulso pelo ${message.author.tag} pelo motivo ${reason}`)
          message.author.send(`Você kickou o ${member.user.tag} pelo motivo ${reason} com sucesso! Lembrando que todas as punições são registradas e armazenadas em nosso banco de dados!`);
        
}
module.exports.config = {

    name: "kick",
    aliases: ["kickar"]
 
 }