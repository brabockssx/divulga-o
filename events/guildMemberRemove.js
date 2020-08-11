const db = require('quick.db');
const Discord = require('discord.js');
module.exports = async (client, member) => {
 let saidaat = await db.fetch(`saida_at_${member.guild.id}`);
  if (saidaat !== true) return undefined;
  let bots = member.guild.members.filter(m => m.user.bot).size;
  let users = member.guild.memberCount;
 let e = new Discord.RichEmbed()
 .setTitle(`Poxa, mas já saiu ${member.user.username}?`)
 .setColor('#ff0000')
 .setDescription(`Espero que gostou do servidor **${member.guild.name}**, não queriamos que você fosse embora :( ou será que você foi punido? (espero que não em)`)
 .addField('Agora sem você temos:', `${users} membros no servidor :(`)
 .setThumbnail(member.user.avatarURL)
 .setFooter(member.guild.name, member.guild.iconURL)
 .setTimestamp();
  console.log(`O usuário ${member.user.username} saiu do servidor ${member.guild.name}`);
  let canal = await db.fetch(`saida_${member.guild.id}`);
    client.channels.get(canal).send(e);
}