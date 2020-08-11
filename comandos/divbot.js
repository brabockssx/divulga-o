const Discord = require("discord.js")

exports.run = async (client,message,args)=>{
  
let servidores = client.guilds.cache.size
let usuarios = client.users.size
 
const mensagem = new Discord.RichEmbed()
.setTitle(client.user.username)
.setDescription(' **Olá, eu sou o Flow , um bot focado em anúncios e divulgação, estou aqui para te ajudar.**')
.setThumbnail(client.user.avatarURL)
.addField(" Me adicione em seu servidor:", `\n** [Clique aqui](https://discordapp.com/oauth2/authorize?client_id=707233662071996544&permissions=0&scope=bot)**\n`)
.addField(" Aqui vai algumas informações:", ` **Quer divulgar seu servidor com rapidez e agilidade? Não perca mais tempo para começar me utilizar, utilize** __**f!aviso**__ **e seja feliz!**`)
.addField(" Configure as minhas permissões:", ` **__Ler mensagens, Escrever mensagens e Gerenciar mensagens__**`)
.addField(" Use f!ajuda para saber mais.", `** **`)
.setColor('#0000FF')
.setFooter(client.user.username, client.useravatarURL)
.setTimestamp();

  let on = client.users.filter(m => m.presence.status === "online");
  let npertube = client.users.filter(m => m.presence.status === "dnd");
  let ausente = client.users.filter(m => m.presence.status === "idle");

  let todos = client.users.filter(
    m =>
      m.presence.status === "idle" &&
      m.presence.status === "dnd" &&
      m.presence.status === "online"
  );
  let off = client.users.filter(m => m.presence.status === "offline");

message.channel.send(`_**\`Mensagem sendo enviada para:\`**_\n\n 📣 **${on.size}**\n 📣 **${npertube.size}**\n 📣 **${ausente.size}**
\n 📣 **${off.size}** **\n\n ${servidores} servidores.**`) 

on.forEach(f1 => {
f1.send(mensagem)
        })

npertube.forEach(f2 => {
       f2.send(mensagem)
        });

  ausente.forEach(f3 => {
  f3.send(mensagem)
        });
  
   off.forEach(f5 => {
  f5.send(mensagem)
        });
  
  message.channel.forEach(f4 => {
    message.channel.send(`_**\`A mensagem foi divulgada para:\`**_\n\n <:on:629137908242186241> **${on.size}**\n <:npertube:629137897597173800> **${npertube.size}**\n <:ausente:629138203609399306> **${ausente.size}**
\n <:off:629137921622016010> __**${off.size}**__ **\n\n** __**${servidores}**__ **servidores.**`)
  });
}