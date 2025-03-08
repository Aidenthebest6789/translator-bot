const { Client } = require('discord.js');
const config = require('../../config.json');

module.exports = {
    onReady: (client) => {
        console.log(`Logged in as ${client.user.tag}!`);
        client.user.setActivity(config.defaultStatus, { type: 'WATCHING' });
    }
};