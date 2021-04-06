module.exports = {
    name: 'color',
    desc: 'Gives a color role.',
    async execute(message, args, MessageEmbed){
        if(!message.guild.members.cache.get('793504895738314782').permissions.has('MANAGE_ROLES')){return message.reply('I don\'t have enough permissions ;w;')}
        if(!args[0]){
            return message.reply(
                new MessageEmbed()
                .setColor('ffaaff')
                .setTitle('Color/Help')
                .setDescription(
                    '*With this command you can change your color!*'
                    +'\nTo make it you need to use `>color set #hex-color`'
                    +'\nExample: **>color set #ffaaff**, **>color set #ffaaff @user**'
                    +'\n'
                    +'\nAlso you can remove it if you want!'
                    +'\nExample: **>color remove #ffaaff**, **>color remove #ffaaff @user**'
                    )
            )
        }
        const User = message.mentions.users.first() || message.author;
        function RmvCrls() {
            message.guild.roles.cache.filter(role => role.name.startsWith('>#') && role.members.size == 0).forEach((role) => role.delete('This role no longer have members so I deleted it.'))    
        }
        setImmediate(() => {setTimeout(() => {RmvCrls()}, 1000); message.react('<:paw:800419421406756894>')})
        if(args[0] == 'set'){
            if(!args[1] || !args[1].startsWith('#') || args[1].startsWith('<')){return}
            if(User.id != message.author.id){if(!message.member.permissions.has('MANAGE_ROLES', true)){return message.reply('not enough permissions!')}};
            const CR = args[1].replace('#', '>#').toUpperCase()
            const ColorRole = message.guild.roles.cache.find(role => role.name == `${CR}`);
            message.guild.members.cache.get(User.id).roles.remove(message.guild.roles.cache.filter(role => role.name.startsWith('>#')))
            if(!ColorRole){
                var pos = message.guild.roles.cache.find(role => role.name == 'Ralsin').position;
                await message.guild.roles.create({ data: { name: `${CR}`, color: `${args[1].toUpperCase()}`, position: pos, permissions: 0 }, reason: `User ${message.author.tag} requested it.`})
                return message.guild.members.cache.get(User.id).roles.add(message.guild.roles.cache.find(role => role.name == `${CR}`).id)
            }
            if(ColorRole){message.guild.members.cache.get(User.id).roles.add(ColorRole.id)}
        }
        if(args[0] == 'remove'){
            if(!args[1] || args[1].startsWith('<')){return message.guild.members.cache.get(User.id).roles.remove(message.guild.roles.cache.filter(role => role.name.startsWith('>#')))}
            try {
                const CR = args[1].replace('#', '>#').toUpperCase()
                message.guild.members.cache.get(User.id).roles.remove(message.guild.roles.cache.find(role => role.name == `${CR}`).id);
            } catch (error) {message.reply('maybe you spelled the color wrong.')}
        }
    }
}