const { translateText } = require('../utils/languageSupport');

module.exports = {
    name: 'translate',
    description: 'Translates text to a specified language.',
    async execute(interaction) {
        const textToTranslate = interaction.options.getString('text');
        const targetLanguage = interaction.options.getString('language');

        if (!textToTranslate || !targetLanguage) {
            return interaction.reply('Please provide both text and target language.');
        }

        try {
            const translatedText = await translateText(textToTranslate, targetLanguage);
            return interaction.reply(translatedText);
        } catch (error) {
            console.error(error);
            return interaction.reply('There was an error translating the text. Please try again later.');
        }
    },
};