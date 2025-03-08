const { Client, GatewayIntentBits } = require('discord.js');
const { execute: translate } = require('../commands/translate');
const { execute: setStatus } = require('../commands/status');

const onMessage = async (client, message) => {
    if (message.author.bot) return;

    const args = message.content.trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === '/translate') {
        await translate(message, args);
    } else if (command === '/status') {
        await setStatus(message, args);
    } else {
        console.log(`Received message: ${message.content}`);
    }
};

module.exports = onMessage;