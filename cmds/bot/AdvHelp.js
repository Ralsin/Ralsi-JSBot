module.exports = {
    name: 'help',
    execute(message, MessageEmbed, bot){
        const description = new Array();
        bot.commands.forEach((cmd) => {if(cmd.desc){description.push(`\`>${cmd.name}\` - *${cmd.desc}*`)}});
        message.reply(
            new MessageEmbed()
            .setColor('c0ff00')
            .setTitle('Help (Command list.)')
            .setDescription(description.sort())
            .setFooter('Type ">help rp" to see RP commands. (wip)')
        )
    }
}

