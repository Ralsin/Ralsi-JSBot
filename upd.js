const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv').config();

bot.once('ready', () => {
    console.log('Set!')
    bot.user.setActivity('Updating...')
})

bot.login(process.env.token)