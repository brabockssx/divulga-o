const Discord = require('discord.js');
const db = require('quick.db');
module.exports = async (client, member) => {
let entradaat = await db.fetch(`entrada_at_${member.guild.id}`);
  if (entradaat !== true) return;
  let bots = member.guild.members.filter(m => m.user.bot).size;
  let users = member.guild.memberCount;
 let e = new Discord.RichEmbed()
 .setTitle(`Seja bem vindo(a) ${member.user.username}!`)
 .setColor('#ff0000')
 .setDescription(`Aqui no servidor **${member.guild.name}** pode se encontrar muitas coisas divertidas, espero que curta o servidor!`)
 .addField('Agora com você temos:', `${users} membros no servidor!`)
 .setThumbnail(member.user.avatarURL)
 .setFooter(member.guild.name, member.guild.iconURL)
 .setTimestamp();
  console.log(`O usuário ${member.user.username} entrou no servidor ${member.guild.name}`);
  let canal = await db.fetch(`entrada_${member.guild.id}`);
  if (canal === null) return;
    client.channels.get(canal).send(e);
}