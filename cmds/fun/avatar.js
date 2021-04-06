module.exports = {
    name: 'avatar',
    desc: 'Get user avatar.',
    execute(message, MessageEmbed){
        var user = message.mentions.users.first() || message.author;
        message.reply(new MessageEmbed()
            .setColor('c0ff00')
            .setTitle('**Avatar**')
            .setDescription('Here it is')
            .setImage(user.avatarURL({dynamic: true, size: 2048}))
        )
    }
}