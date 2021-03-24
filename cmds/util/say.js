module.exports = {
    name: 'say',
    execute(message){
        if(message.author.id == '704037343878971424') {
            message.delete();
            message.channel.send(message.content.replace('>say', ''))
        }
    }
}