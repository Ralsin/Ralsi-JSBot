module.exports = {
    name: 'daily',
    execute(message, sql, MessageEmbed, dailyTime){
        const guildID = message.guild.id;
        const authorID = message.author.id;
        if(dailyTime.has(`${guildID} - ${authorID}`)) return message.reply('you can use this command only once at day!');
        let reward = Math.floor(Math.random() * 500)
        sql.query(`UPDATE levelling SET laeMoney=laeMoney+${reward} WHERE laeGuildID=${guildID} AND laeUserID=${authorID}`, function(){
            dailyTime.set(`${guildID} - ${authorID}`);
            setTimeout(() => {dailyTime.delete(`${guildID} - ${authorID}`)}, 86400000);
            let embed = new MessageEmbed()
            .setColor('c0ff00')
            .setTitle('**Daily**')
            .setDescription(`You got ${reward}$!`);
            message.reply(embed);
        })
    }
}