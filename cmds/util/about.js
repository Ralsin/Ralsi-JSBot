module.exports = {
    name: 'about',
    execute(message, args, MessageEmbed, sql, bot){
        if(!args[0]){
            const embed = new MessageEmbed()
            .setColor('555555')
            .setTitle(`**About:**`)
            .setDescription('**server\n@user\n(to see about bot just ping him)**')
            return message.reply(embed)
        } else
        if(message.mentions.users.first() && !message.mentions.users.first().bot){
            var user = message.mentions.users.first();
            let userStatus = user.presence.status;
            if(userStatus == 'online'){userStatus = '<:online:820681020139372544> Online'}
            if(userStatus == 'idle'){userStatus = '<:idle:820681020172009482> Idle'}
            if(userStatus == 'dnd'){userStatus = '<:dnd:820681020110012518> Do Not Disturb'}
            if(userStatus == 'offline'){userStatus = '<:offline:820681019845509122> Offline'}
            sql.query(`SELECT * FROM info WHERE UserID=${user.id}`, function(err, results, fields){
                if(results[0] != undefined){UserInfo = results[0].infoText} else {UserInfo = '>set info [text]'}
                const embed = new MessageEmbed()
                .setColor(message.guild.members.cache.get(user.id).roles.highest.hexColor)
                .setTitle(`**About ${user.username}**`)
                .setDescription(UserInfo)
                .setThumbnail(user.avatarURL({size: 128}))
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
            .setThumbnail(message.guild.iconURL({format: 'png', size: 2048}))
            .addField('**Owner:**', `<@!${message.guild.owner.id}>`)
            .addField(`Roles: 10/${message.guild.roles.cache.size}`, message.guild.roles.cache.filter(roles => roles.name != '@everyone').sort((a, b) => b.position - a.position).first(10).join('\n'))
            .addField('**Region:**', message.guild.region.toUpperCase())
            .addField('**Members:**', `<:users:818842653855580160> Users: ${message.guild.members.cache.filter(member => !member.user.bot).size}\n<:bot:819268208447848509> Bots: ${message.guild.members.cache.filter(member => member.user.bot).size}`)
            return message.reply(embed)
        } else
        if(args[0] == 'me'){
            var user = message.author;
            let userStatus = user.presence.status;
            if(userStatus == 'online'){userStatus = '<:online:820681020139372544> Online'}
            if(userStatus == 'idle'){userStatus = '<:idle:820681020172009482> Idle'}
            if(userStatus == 'dnd'){userStatus = '<:dnd:820681020110012518> Do Not Disturb'}
            if(userStatus == 'offline'){userStatus = '<:offline:820681019845509122> Offline'}
            sql.query(`SELECT * FROM info WHERE UserID=${user.id}`, function(err, results, fields){
                if(results[0] != undefined){UserInfo = results[0].infoText} else {UserInfo = '>set info [text]'}
                const embed = new MessageEmbed()
                .setColor(message.guild.members.cache.get(user.id).roles.highest.hexColor)
                .setTitle(`**About ${user.username}**`)
                .setDescription(UserInfo)
                .setThumbnail(user.avatarURL({size: 128}))
                .addField('**Highest role:**', message.guild.members.cache.get(user.id).roles.highest)
                .addField('**Status:**', userStatus)
                const upa = user.presence.activities;
                if(upa!=''){embed.addField('**Activities:**', upa.map(upa => `${upa}\n⠀${upa.details}\n⠀${upa.state}\n`))} else {embed.addField('**Activities:**', 'nothing')}
                if(message.guild.id=='768232889024249857'){embed.addField(':banana::', results[0].bananas)}
                return message.reply(embed)
            })
        }
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