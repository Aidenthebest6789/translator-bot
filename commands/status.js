const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Set a custom status for the bot')
    .addStringOption(option => option.setName('status').setDescription('Custom status').setRequired(true)),
  async execute(interaction) {
    const status = interaction.options.getString('status');
    interaction.client.user.setActivity(status);
    await interaction.reply(`Status set to: ${status}`);
  }
};
