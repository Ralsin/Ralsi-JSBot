module.exports = {
    name: 'abot',
    execute(message, MessageEmbed, bot){
        const os = require('os');
        let bot_platform = os.platform;
        if(bot_platform == 'win32'){bot_platform = 'Windows'}
        if(bot_platform == 'linux'){bot_platform = 'Linux'}
        if(bot_platform == 'darwin'){bot_platform = 'MacOS'}
        if(bot_platform == 'android'){bot_platform = 'Android'}
        let cmds = 0;
        bot.commands.forEach((cmd) => {if(cmd.desc){cmds = cmds + 1}});
        return message.reply(
            new MessageEmbed()
            .setColor('c0ff00')
            .setTitle('About **bot**')
            .setDescription(`Bot pfp by FaxeL#6465`)
            .addField('Prefix: ', '` > `', true)
            .addField(
                'Memory:',
                `Process: Using ${(process.memoryUsage().heapUsed/1024/1024).toFixed(0)}mb`
                +`\nOS: ${((os.totalmem() - os.freemem())/1024/1024).toFixed(0)}mb/${(os.totalmem()/1024/1024).toFixed(0)}mb`, true
            )
            .addField('Platform: ', `${bot_platform} ${os.arch()}`, true)
            .addField('API: ', `discord.js ${JSON.parse(require('fs').readFileSync('package.json')).dependencies['discord.js'].replace('^', 'v')}`, true)
            .addField('Total commands:', cmds)
            .setFooter(`Author: ${bot.users.cache.get('704037343878971424').tag}`, bot.users.cache.get('704037343878971424').avatarURL())
        )
    }
}