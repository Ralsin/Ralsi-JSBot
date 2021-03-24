module.exports = {
    name: 'cmds',
    execute(command, bot, message, MessageEmbed, args, sql, fs){
        // ~Fun
        if(command === 'help'){bot.commands.get('help').execute(message, MessageEmbed)}
        if(command === 'avatar'){bot.commands.get('avatar').execute(message, MessageEmbed)}
        if(command === 'emoji'){bot.commands.get('emoji').execute(message, args, bot)}
        if(command === 'emojis'){bot.commands.get('emojis').execute(message, MessageEmbed, bot)}

        // Administrating
        if(command === 'kick'){bot.commands.get('kick').execute(message)}
        if(command === 'ban'){bot.commands.get('ban').execute(message)}
        if(command === 'clear'){bot.commands.get('clear').execute(message, args)}

        // Other
        if(command === 'say'){bot.commands.get('say').execute(message, args)}
        if(command === 'about'){bot.commands.get('about').execute(message, args, MessageEmbed, sql, bot)}
        if(command === 'set'){bot.commands.get('set').execute(message, args, sql)}
        if(command === 'ping'){bot.commands.get('ping').execute(message, MessageEmbed, bot)}
        if(command === 'bug'){bot.commands.get('bug').execute(message, bot, MessageEmbed)}
        if(command === 'hug'){bot.commands.get('hug').execute(message, MessageEmbed, fs)}
    }
}