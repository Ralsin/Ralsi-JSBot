module.exports = {
    name: 'work',
    execute(message, sql, MessageEmbed, workTime){
        const guildID = message.guild.id;
        const authorID = message.author.id;
        if(workTime.has(`${guildID} - ${authorID}`)) return message.reply('you can use this command only once every 30 minutes!');
        let reward = Math.floor(Math.random() * 100)
        sql.query(`UPDATE levelling SET laeMoney=laeMoney+${reward} WHERE laeGuildID=${guildID} AND laeUserID=${authorID}`, function(){
            workTime.set(`${guildID} - ${authorID}`);
            setTimeout(() => {workTime.delete(`${guildID} - ${authorID}`)}, 1800000);
            let embed = new MessageEmbed()
            .setColor('c0ff00')
            .setTitle('**Work**')
            .setDescription(`You got ${reward}$!`);
            message.reply(embed);
        })
    }
}