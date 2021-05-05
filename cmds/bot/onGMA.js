//onGuildMemberAdd
module.exports = {
    name: 'onGMA',
    execute(member){
        if(member.guild.id == '833247226750566420'){
            member.roles.add(member.guild.roles.cache.get('835778012791439361'))
            member.guild.channels.cache.get('835773762535555122').send(`Everyone! Welcome our new member ${member}!`)
        }
    }
}