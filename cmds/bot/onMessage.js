const sql = require('./ralsi').db;
module.exports = {
    name: 'onMessage',
    execute(message, said, bot, MessageEmbed, bugnanas){
        if(!message.guild) return;
        if(!said.has(`${message.guild.id}-${message.author.id}`)){
            sql.query(`SELECT * FROM levelling WHERE laeGuildID=${message.guild.id} AND laeUserID=${message.author.id}`, function(err, results){
                if(results==''){sql.query(`INSERT INTO levelling(laeGuildID, laeUserID, laeXP, laeMoney) VALUES (${message.guild.id}, ${message.author.id}, 0, 0)`)}
                let msgLongA = (message.content.length/3);
                if(msgLongA > 75) {msgLongA = 75};
                let msgLongB = Math.floor(msgLongA + Math.floor(Math.random() * 10));
                sql.query(`UPDATE levelling SET laeXP=laeXP+${msgLongB} WHERE laeGuildID=${message.guild.id} AND laeUserID=${message.author.id}`, function(){
                    said.set(`${message.guild.id}-${message.author.id}`);
                    setTimeout(() => {said.delete(`${message.guild.id}-${message.author.id}`)}, 30000);
                })
            })
        }
        const rand = (Math.floor(Math.random() * 50));
        const emjs = bot.guilds.cache.get('792554220036816897').emojis.cache;
        const emjsList = emjs.map(emoji => emoji.name);
        const randEmjs = emjsList[Math.floor(Math.random() * emjsList.length)];
        if(rand == '40'){
            const lol = emjs.find(emoji => emoji.name === randEmjs);
            if(!lol.animated){return message.channel.send('<:'+lol+':'+lol.id+'>')}
            else {message.channel.send('<a:'+lol+':'+lol.id+'>')}
        }
        if(message.content.toLowerCase().includes('йифф') || message.content.toLowerCase().includes('yiff')){message.channel.send('<:ahh:794192721258479647>')}
        

        sql.query(`SELECT * FROM info WHERE UserID=${message.author.id}`, function(err, results){
            if(results==''){sql.query(`INSERT INTO info(UserID, infoText, bananas) VALUES (${message.author.id}, '>set info [text]', 0)`)}
        })
        if(message.mentions.users.first() && message.content.includes('🍌')){
            if(message.mentions.users.first().id == message.author.id || bugnanas.has(`${message.guild.id}-${message.author.id}`)) return;
            sql.query(`UPDATE info SET bananas=bananas+1 WHERE UserID=${message.mentions.users.first().id}`)
            bugnanas.set(`${message.guild.id}-${message.author.id}`);
            setTimeout(() => {bugnanas.delete(`${message.guild.id}-${message.author.id}`)}, 3600000);
            message.react('800419421406756894')
        }
        if(message.content == `<@!${bot.user.id}>` || message.content == `<@${bot.user.id}>` || message.content == '<@&822835489152172033>'){bot.commands.get('abot').execute(message, MessageEmbed, bot)}    
    }
}