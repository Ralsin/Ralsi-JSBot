module.exports = {
    name: 'ping',
    desc: 'Shows bot/api ping and uptime.',
    execute(message, MessageEmbed, bot){
        message.reply(
            new MessageEmbed()
            .setColor('c0ff00')
            .addField('Ping: ', 'pinging...')
            .addField('Uptime: ', require('ms')(bot.uptime))
            )
        .then(
            m => m.edit(
                new MessageEmbed()
                .setColor('aaffaa')
                .addField('Ping: ', `${m.createdTimestamp - message.createdTimestamp}ms`)
                .addField('Uptime: ', require('ms')(bot.uptime))
            )
        )
    }
}
//Thanks to DevilFireFox#8685 for code