module.exports = {
    name: 'hex',
    execute(message, MessageEmbed){
        var hex = '#'+Math.floor(Math.random()*0xFFFFFF).toString(16)
        message.channel.send(new MessageEmbed().setColor(hex).setTitle('Random Hex color').setDescription(hex))
    }
}