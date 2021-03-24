module.exports = {
    name: 'set',
    execute(message, args, sql){
        if(args[0] == 'info'){sql.query(`UPDATE info SET infoText='${message.content.slice(10, 265)}' WHERE UserID=${message.author.id}`)}
        message.react('<:paw:800419421406756894>')
    }
}