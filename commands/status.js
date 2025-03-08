function execute(interaction) {
    const statusMessage = interaction.options.getString('message');
    
    if (!statusMessage) {
        return interaction.reply('Please provide a status message.');
    }

    // Set the bot's status message
    interaction.client.user.setActivity(statusMessage, { type: 'WATCHING' })
        .then(() => {
            interaction.reply(`Status message set to: "${statusMessage}"`);
        })
        .catch(error => {
            console.error('Error setting status:', error);
            interaction.reply('There was an error setting the status message.');
        });
}

module.exports = { execute };