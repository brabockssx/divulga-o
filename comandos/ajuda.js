const  Discord = module.  require('discord.js')
const client = new Discord.Client();

exports.run = async (client, message, args) => {

const ajuda = new Discord.RichEmbed()
.setTitle(` <a:SetaCS:707242673022697494> Confira meus comandos: `)
.setDescription(`> <a:star:670376780611452944> \`f!aviso\` (msg) - Manda um aviso a todos do seu servidor \n` +
`> <a:star:670376780611452944> \`f!avisoembed\` | titulo | descrição | link de foto ou gif | \n` +
`Manda um aviso em embed a todos do seu servidor \n` +
`\`Exemplo:\` [Clique aqui](http://prntscr.com/o8pluq)\n` +
`Obs: não tire os separadores | \n` +            
`> <a:star:670376780611452944> \`f!ping\` - Mostra o ping do bot \n` +
`> <a:star:670376780611452944> \`f!cc\` - Cria convite permanente do servidor \n` +  
`> <a:star:670376780611452944> \`f!div\` - Veja sua divulgação \n` +  
`> <a:star:670376780611452944> \`f!convite\` - Meu convite \n` +
`> <a:star:670376780611452944> \`f!global\` - Divulgar seu servidor \n` +
`> <a:star:670376780611452944> \`f!ajuda\` - Para mais informações \n`)
.setThumbnail(client.user.avatarURL)
.setColor("BLACK")
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp();

message.channel.send(ajuda)

}