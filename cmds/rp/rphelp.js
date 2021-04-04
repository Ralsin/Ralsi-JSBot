module.exports = {
    name: 'rphelp',
    execute(message, MessageEmbed){
        message.reply(
            new MessageEmbed()
            .setColor('c0ff00')
            .setTitle('**Help**')
            .setDescription('`hug`')
            .setFooter('WIP!! More actions will be added later...')
        )
    }
}