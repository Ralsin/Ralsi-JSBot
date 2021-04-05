module.exports = {
    name: 'help',
    execute(message, MessageEmbed){
        const embedHelp = new MessageEmbed()
        .setColor('c0ff00')
        .setTitle('**Help**')
        .setDescription(
            '`about` - see about something.'
            +'\n`avatar @user` - get user avatar.'
            +'\n`emoji` - get an emoji from bot\'s server. (>emojis)'
            +'\n`ping` - shows bot/api ping and uptime.'
            +'\n`color` - making color role and gives you.'
            +'\n`hex` - gives you random hex color.'
            +'\n`bug` - if you found a bug or bot crashes on command -- report it.'
            +'\n'
            +'\n**only for admins**'
            +'\n`clear <number>` - clear messages. Max 100.'
            +'\n`kick @user` - kicks mentioned member.'
            +'\n`ban @user` - ban mentioned member.'
        )
        .setFooter('Type ">help rp" to see RP commands. (wip)')
        message.reply(embedHelp)
    }
}
//`xp` - your level and exp.\n`$` - balance check.\n`daily` - daily reward, up to 500.\n`work` - working, up to 100.\n\n`mute @user [time]` - mutes mentioned member. \\[broken]