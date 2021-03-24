module.exports = {
    name: 'hug',
    execute(message, MessageEmbed, fs){
        const files = fs.readdirSync('./rp/hug/furry');
        const pic = files[Math.floor(Math.random() * files.length)]
        console.log(files, pic)
        message.reply(
            new MessageEmbed()
            .setColor('ffaaff')
            .setDescription(`<@!${message.author.id}> hugs <@!${message.mentions.users.first().id}>!`)
            .setImage(`https://raw.githubusercontent.com/Ralsin/JSBot/main/rp/hug/furry/${pic}`)
        )
    }
}