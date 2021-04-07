const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const fs = require('fs');
require('./cmds/bot/inlineReply.js')
const bot = new Discord.Client();
require('dotenv').config();
const prefix = '>';
let said = new Map(); let bugnanas = new Map();

bot.commands = new Discord.Collection();
const load_dir = (dirs) => {
    const files = fs.readdirSync(`./cmds/${dirs}`).filter(file => file.endsWith('.js'));
    for(file of files){
        const command = require(`./cmds/${dirs}/${file}`)
        bot.commands.set(command.name, command)
    }
}
['bot', 'fun', 'rp', 'util'].forEach(e => load_dir(e))

bot.once('ready', () => {
    console.log('Author:\n Ralsin#9199\n  uwu');
    bot.user.setActivity(`">help" on ${bot.guilds.cache.size} servers!`, {type: 'LISTENING'});
    new Discord.WebhookClient('800408005958697000', process.env.webhookURL).send('Bot is online!')
})
bot.on('message', message => {
    if(message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'cmd'){if(message.author.id == '704037343878971424' || message.author.id == '433599597944897536'){try {return eval(message.content.slice(5, 999)), message.react('<:paw:800419421406756894>')} catch (error) {message.channel.send(`\`\`\`${error}\`\`\``)}}}
    if(command === 'ucmd'){if(message.author.id == '704037343878971424' || message.author.id == '433599597944897536') {return eval(message.content.slice(5, 999)), message.react('<:paw:800419421406756894>')}}
    try {bot.commands.get('onMessage').execute(message, said, bot, MessageEmbed, bugnanas)} catch(error) {message.channel.send(`\`\`\`${error}\`\`\``)}
    if(!message.content.startsWith(prefix)) return;
    try {bot.commands.get('cmds').execute(command, bot, message, MessageEmbed, args, fs)} catch(error) {message.channel.send(`\`\`\`${error}\`\`\``)}
})
bot.login(process.env.token)