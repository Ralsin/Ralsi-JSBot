const sql = require('../bot/ralsi').db;
module.exports = {
    name: 'about',
    execute(message, args, MessageEmbed){
        if(!args[0]){
            const embed = new MessageEmbed()
            .setColor('555555')
            .setTitle(`**About:**`)
            .setDescription('**server\n@user\n(to see about bot just ping him)**')
            return message.reply(embed)
        } else
        if(args[0] == 'me' || message.mentions.users.first() && !message.mentions.users.first().bot){
            var user = message.mentions.users.first() || message.author;
            let userStatus = user.presence.status;
            if(userStatus == 'online'){userStatus = '<:online:824298961060757555> Online'}
            if(userStatus == 'idle'){userStatus = '<:idle:824298960734650389> Idle'}
            if(userStatus == 'dnd'){userStatus = '<:dnd:824298961129046086> Do Not Disturb'}
            if(userStatus == 'offline'){userStatus = '<:offline:824298961195630622> Offline'}
            sql.query(`SELECT * FROM info WHERE UserID=${user.id}`, function(err, results, fields){
                if(results[0] != undefined){UserInfo = results[0].infoText} else {UserInfo = '>set info [text]'}
                const embed = new MessageEmbed()
                .setColor(message.guild.members.cache.get(user.id).roles.highest.hexColor)
                .setTitle(`**About ${user.username}**`)
                .setDescription(UserInfo)
                .setThumbnail(user.avatarURL({dynamic: true}))
                .addField('**Highest role:**', message.guild.members.cache.get(user.id).roles.highest)
                .addField('**Status:**', userStatus)
                const upa = user.presence.activities;
                if(upa!=''){embed.addField('**Activities:**', upa.map(upa => `${upa}\n⠀${upa.details}\n⠀${upa.state}\n`))} else {embed.addField('**Activities:**', 'nothing')}
                if(message.guild.id=='768232889024249857'){embed.addField(':banana::', results[0].bananas)}
                return message.reply(embed)
            })
        } else
        if(args[0] == 'server'){
            const embed = new MessageEmbed()
            .setColor('c0ff00')
            .setTitle(`**About ${message.guild.name}**`)
            .setDescription('**Server**')
            .setThumbnail(message.guild.iconURL({format: 'png', size: 2048, dynamic: true}))
            .addField('**Owner:**', `<@!${message.guild.owner.id}>`)
            .addField('**Channels:**', `Count: ${message.guild.channels.cache.size - message.guild.channels.cache.filter(channel => channel.type == 'category').size}\nText: ${message.guild.channels.cache.filter(channel => channel.type == 'text').size}\nVoice: ${message.guild.channels.cache.filter(channel => channel.type == 'voice').size}\nNews: ${message.guild.channels.cache.filter(channel => channel.type == 'news').size}`, true)
            .addField('**Members:**', `<:users:824298961103880203> Users: ${message.guild.members.cache.filter(member => !member.user.bot).size}\n<:bot:824298961191698472> Bots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
            .addField('**Region:**', message.guild.region.toUpperCase(), true)
            .addField(`Roles: 10/${message.guild.roles.cache.size}`, message.guild.roles.cache.filter(roles => roles.name != '@everyone').sort((a, b) => b.position - a.position).first(10).join('\n'))
            return message.reply(embed)
        } else
        if(args[0] == 'about'){message.reply(new MessageEmbed().setColor('FFFFFF').setTitle('What did you expect to see here?'))}
        /*if(args[0] == 'Ralsin'){
            return message.reply(
                new MessageEmbed()
                .setColor('ff00aa')
                .setTitle('About **Ralsin**')
                .setDescription(
                    'I don't know what to say..\n'
                    +'Special thanks to..\n'
                    +'<@!731146995959332945>/ Hiroshi for being cute.\n'
                    +'<@!142723249355227138> and <@!785170411997364225>/ Diamond and Lin for being nice to me.\n'
                    +'<@!290866265176932352>/ Asriel for being cool.\n'
                    +`and you, <@!${message.author.id}>, for using my bot!`
                )
                .setFooter(`${bot.users.cache.get('704037343878971424').tag}~`, bot.users.cache.get('704037343878971424').avatarURL())
            )
        }*/
    }
}