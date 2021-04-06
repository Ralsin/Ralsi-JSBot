module.exports = {
    name: 'ban',
    desc: 'Uses the powerfull banhammer to ban mentioned member.',
    execute(message){
        const mmbr = message.mentions.users.first();
        if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('You dont have enough permissions.')
        if (!mmbr) return message.channel.send('Mention a user!');
        if (mmbr, message.member.permissions.has('BAN_MEMBERS')){
            const memberTarget = message.guild.members.cache.get(mmbr.id);
            memberTarget.ban();
            message.channel.send('<@' + mmbr.id + '>' + ' was banned.')
        }
    }
}