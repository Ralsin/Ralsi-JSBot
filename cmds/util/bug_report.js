module.exports = {
    name: 'bug',
    execute(message, bot, MessageEmbed){
        bot.channels.cache.get('823488700783525888').send(
            new MessageEmbed()
            .setColor('RED')
            .setDescription(message.content.slice(5, 260))
            .setFooter(`${message.author.tag} / ${message.author.id}`, message.author.avatarURL())
        )
    }
}