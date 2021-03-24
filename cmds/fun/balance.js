module.exports = {
    name: 'balance',
    execute(message, mySql, sql, Discord, MessageEmbed){
        const guildID = message.guild.id;
        const authorID = message.author.id;
        console.log(`${message.author.username}#${message.author.discriminator} used '$'`)
        sql.query(`SELECT * FROM levelling WHERE laeGuildID=${guildID} AND laeUserID=${authorID}`, function(results, fields){
            const embed = new Discord.MessageEmbed()
            .setColor('c0ff00')
            .setTitle('**Balance**')
            .setDescription(`$: ${fields[0].laeMoney}`)
            message.reply(embed)
        })
    }
}