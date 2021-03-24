module.exports = {
    name: 'ping',
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