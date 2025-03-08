const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('../config.json');
const { execute: translateCommand } = require('./commands/translate');
const { execute: statusCommand } = require('./commands/status');
const onReady = require('./events/ready');
const onMessage = require('./events/message');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', onReady);
client.on('messageCreate', onMessage);

client.login(token);