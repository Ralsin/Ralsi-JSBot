module.exports = {
    name: 'emoji',
    desc: 'Get an emoji from bot\'s server. (>emojis)',
    execute(message, args, bot){
        const emojiSend = (bot.guilds.cache.get('792554220036816897').emojis.cache.find(emoji => emoji.name == args[0]));
        if(args[0]==='senko'){return message.channel.send('<a:senko1:799737911754752000> <a:senko2:799738008052039710>')}
        if(!emojiSend){return message.reply('Invalid emoji!')}
        if(!emojiSend.animated){return message.channel.send(`<:${args[0]}:${emojiSend.id}>`)}
        else {message.channel.send(`<a:${args[0]}:${emojiSend.id}>`)}
    }
}