module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`Logged in as ${client.user.tag}`);
    const config = require('../config.json');
    client.user.setActivity(config.status);
  }
};
