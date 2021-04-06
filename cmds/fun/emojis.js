module.exports = {
    name: 'emojis',
    execute(message, MessageEmbed, bot){
        var eList = bot.guilds.cache.get('792554220036816897').emojis.cache.filter(e => !e.animated).map((e) => `${e}`).join(' ‎ ‎ ');
        var eListA = bot.guilds.cache.get('792554220036816897').emojis.cache.filter(e => e.animated).map((e) => `${e}`).join(' ‎ ‎ ');
        var embed = new MessageEmbed()
        .setColor('c0ff00')
        .setTitle('**Emojis**')
        .setDescription(`Static:\n${eList}\n\nAnimated:\n${eListA}`)

        message.reply(embed)
    }
}