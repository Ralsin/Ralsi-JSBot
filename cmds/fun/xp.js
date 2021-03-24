module.exports = {
    name: 'xp',
    execute(message, sql, MessageEmbed){
        const guildID = message.guild.id;
        const authorID = message.author.id;
        sql.query(`SELECT * FROM levelling WHERE laeGuildID=${guildID} AND laeUserID=${authorID}`, function(results, fields){
            if(results==''){connection.query(`INSERT INTO levelling(laeGuildID, laeUserID, laeXP, laeMoney) VALUES (${guildID}, ${authorID}, 0, 0)`)}
            let lvl = 1
            let xp = fields[0].laeXP;
            let nxt = Math.floor(363 * 2.113 * lvl);
            while(nxt < xp) {lvl++, nxt = Math.floor(363 * 2.113 * lvl)}
            if(nxt > xp) {
            let lvlxp = new MessageEmbed()
            .setColor('c0ff00')
            .setTitle('**Level**')
            .setDescription(`Level: ${lvl}\nXP:${xp}\nYou need ${nxt - xp} more xp to lvl up.`)
            message.reply(lvlxp);
            }
        })
        console.log(`${message.author.username}#${message.author.discriminator} used 'xp'`);
    }
}