module.exports = {
    name: 'ban',
    desc: 'Uses the powerfull banhammer to ban mentioned member.',
    execute(message){
      if(!message.guild.members.cache.get('793504895738314782').permissions.has('BAN_MEMBERS')){return message.reply('I don\'t have enough permissions ;w;')}
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