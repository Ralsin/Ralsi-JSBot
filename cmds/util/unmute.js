module.exports = {
    name: 'unmute',
    execute(message){
        const mmbr = message.mentions.users.first();
        if (!mmbr) return message.reply('mention a user!')
        if (!message.member.permissions.has('MUTE_MEMBERS')) return message.reply('you dont have enough permissions!')
        if (mmbr, message.member.permissions.has('MUTE_MEMBERS')){
            const pop = message.guild.members.cache.get(mmbr.id);
            muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
            pop.roles.remove(muteRole).catch(console.error);
            message.channel.send(`<@${pop.user.id}> was unmuted!`)
        }
    }
}