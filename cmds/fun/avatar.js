module.exports = {
    name: 'avatar',    
    execute(message, MessageEmbed){
        var user = message.mentions.users.first() || message.author;
        const avatar = new MessageEmbed()
        .setColor('c0ff00')
        .setTitle('**Avatar**')
        .setDescription('Here it is')
        .setImage(user.avatarURL({dynamic: true, size: 2048}))
        message.reply(avatar);
    }
}