module.exports = {
    name: 'hug',
    execute(message, MessageEmbed, fs){
        const files = fs.readdirSync('./rp/hug/furry');
        const pic = files[Math.floor(Math.random() * files.length)]
        message.reply(
            new MessageEmbed()
            .setColor('ffaaff')
            .setDescription(`<@!${message.author.id}> hugs <@!${message.mentions.users.first().id}>!`)
            .setImage(`https://raw.githubusercontent.com/Ralsin/Ralsi-JSBot/main/rp/hug/furry/${pic}`)
        )
    }
}