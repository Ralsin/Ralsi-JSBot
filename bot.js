const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const fs = require('fs');
const bot = new Discord.Client();
require('dotenv').config();

let said = new Map();
let bugnanas = new Map();

const sql = require('mysql2').createPool({
    connectionLimit: 4,
    host: process.env.sqlHost,
    user: process.env.sqldb,
    password: process.env.pass,
    database: process.env.sqldb
});

const prefix = '>';
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
    bot.commands.get('onMessage').execute(message, sql, said, bot, MessageEmbed, bugnanas)
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    bot.commands.get('cmds').execute(command, bot, message, MessageEmbed, args, sql, fs)
    if(command === 'cmd'){if(message.author.id == '704037343878971424'){eval(message.content.slice(5, 999)); setTimeout(() => {message.react('<:paw:800419421406756894>')}, 500)}}
})

bot.login(process.env.token)