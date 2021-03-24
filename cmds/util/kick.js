module.exports = {
    name: 'kick',
    execute(message, args, Discord){
        const mmbr = message.mentions.users.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send('You dont have enough permissions.')
        if (!mmbr) return message.channel.send('Mention a user!');
        if (mmbr, message.member.permissions.has('KICK_MEMBERS')){
            const memberTarget = message.guild.members.cache.get(mmbr.id);
            memberTarget.kick();
            message.channel.send('<@' + mmbr.id + '>' + ' was kicked.')
        }
    }
}