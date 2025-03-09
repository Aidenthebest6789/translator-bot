const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('translate')
    .setDescription('Translate text to a specified language')
    .addStringOption(option => option.setName('text').setDescription('Text to translate').setRequired(true))
    .addStringOption(option => option.setName('language').setDescription('Target language').setRequired(true)),
  async execute(interaction) {
    const text = interaction.options.getString('text');
    const language = interaction.options.getString('language');

    try {
      const response = await axios.get('https://api.translate.com/translate', {
        params: {
          text: text,
          target_lang: language
        }
      });
      await interaction.reply(response.data.translated_text);
    } catch (error) {
      console.error(error);
      await interaction.reply('Failed to translate text.');
    }
  }
};
