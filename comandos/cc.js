var Discord = require('discord.js')

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    if(!message.member.hasPermission('CREATE_INSTANT_INVITE')) {
        return message.channel.send(` <a:emoji_10:659492982004776972>  | ${message.author} Me parece que você não tem permissão de criar convites no servidor.`)
    }
    try {
    const invite = await message.channel.createInvite({maxAge: 0});

    message.reply(`:incoming_envelope: **Convite Criado:** \n ${invite}`)


} catch (err) {
    message.reply('**<a:flor:670379087285452826 | Por algum motivo eu não tenho permissão de criar convites nesse servidor.**')
   }
}

module.exports.config = { 
    name: 'cc',
    aliases: ['criarconvite']
}