const ms = require('ms')
module.exports = {
    name: 'mute',
    execute(message, args){
        const mmbr = message.mentions.users.first();
        if (!mmbr) return message.reply('mention a user!')
        if (!message.member.permissions.has('MUTE_MEMBERS')) return message.reply('you dont have enough permissions!')
        if (mmbr, message.member.permissions.has('MUTE_MEMBERS')) {
            const pop = message.guild.members.cache.get(mmbr.id);
            muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
            if (muteRole) {
                if (!args[1]) {
                    pop.roles.add(muteRole);
                    message.channel.send(`<@${pop.user.id}> was muted permanently!`)
                    return;
                }

                pop.roles.add(muteRole);
                message.channel.send(`<@${pop.user.id}> was muted for ${ms(ms(args[1]))}!`)

                setTimeout(function () {
                    if(pop.roles.cache.has(muteRole.id)){
                        pop.roles.remove(muteRole);
                        message.channel.send(`<@${pop.user.id}> was unmuted by timer!`)
                    }
                }, ms(args[1]))
                return;
            }
        }
    }
}
