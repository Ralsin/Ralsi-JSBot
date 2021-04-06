module.exports = {
    name: 'clear',
    desc: 'Clear messages. Max 100.',
    async execute(message, args){
        if(!message.member.permissions.has('MANAGE_MESSAGES')){message.reply('You dont have the permissions to do that.')}
        if(message.member.permissions.has('MANAGE_MESSAGES')){
            if(!args[0]) return message.reply('Please enter the amount of messages to clear!');
            if(isNaN(args[0])) return message.reply('Please enter a real number.');
            if(args[0]>100) return message.reply('You cant clear more than 100 messages!');
            if(args[0]<1) return message.reply('You must at least delete one message!');
            const val = Number.parseInt(args[0])
            await message.channel.messages.fetch({limit: val+1}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
        }
    }
}