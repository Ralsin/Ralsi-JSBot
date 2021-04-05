module.exports = {
    name: 'cmds',
    execute(command, bot, message, MessageEmbed, args, fs){
        if(command === 'help'){
            if(args[0]=='rp'){return bot.commands.get('rphelp').execute(message, MessageEmbed)}
            if(args[0]=='adv'){return bot.commands.get('Advanced Help').execute(message, MessageEmbed, bot)}
            return bot.commands.get('help').execute(message, MessageEmbed)
        }
        if(command === 'avatar'){return bot.commands.get('avatar').execute(message, MessageEmbed)}
        if(command === 'emoji'){return bot.commands.get('emoji').execute(message, args, bot)}
        if(command === 'emojis'){return bot.commands.get('emojis').execute(message, MessageEmbed, bot)}
        if(command === 'color'){return bot.commands.get('color').execute(message, args, MessageEmbed)}
        if(command === 'hex'){return bot.commands.get('hex').execute(message, MessageEmbed)}

        if(command === 'kick'){return bot.commands.get('kick').execute(message)}
        if(command === 'ban'){return bot.commands.get('ban').execute(message)}
        if(command === 'clear'){return bot.commands.get('clear').execute(message, args)}

        if(command === 'say'){return bot.commands.get('say').execute(message, args)}
        if(command === 'about'){return bot.commands.get('about').execute(message, args, MessageEmbed)}
        if(command === 'set'){return bot.commands.get('set').execute(message, args)}
        if(command === 'ping'){return bot.commands.get('ping').execute(message, MessageEmbed, bot)}
        if(command === 'bug'){return bot.commands.get('bug').execute(message, bot, MessageEmbed)}
        
        if(command === 'hug'){return bot.commands.get('hug').execute(message, MessageEmbed, fs)}
    }
}