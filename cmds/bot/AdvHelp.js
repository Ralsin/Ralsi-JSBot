module.exports = {
    name: 'Advanced Help',
    desc: 'Brand new, Advanced Help! (bruhhh).',
    execute(message, MessageEmbed, bot){
        const bl = []
        const sets = new Set();
        bot.commands.forEach((cmd) => {sets.add(`${cmd.name}\n*${cmd.desc}*`)});
        const description = Array.from(sets).filter(() => !bl)
        message.reply(
            new MessageEmbed()
            .setColor('c0ff00')
            .setTitle(this.desc)
            .setDescription(description)
        )
        console.log(description)
    }
}