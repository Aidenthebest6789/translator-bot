const languages = {
    'English': 'en',
    'Spanish': 'es',
    'French': 'fr',
    'German': 'de',
    'Chinese': 'zh',
    'Japanese': 'ja',
    'Korean': 'ko',
    'Russian': 'ru',
    'Italian': 'it',
    'Portuguese': 'pt',
    'Arabic': 'ar',
    'Hindi': 'hi',
    'Bengali': 'bn',
    'Turkish': 'tr',
    'Vietnamese': 'vi',
    'Thai': 'th',
    'Swedish': 'sv',
    'Danish': 'da',
    'Norwegian': 'no',
    'Finnish': 'fi',
    'Dutch': 'nl',
    'Polish': 'pl',
    'Czech': 'cs',
    'Hungarian': 'hu',
    'Romanian': 'ro',
    'Hebrew': 'he',
    'Indonesian': 'id',
    'Malay': 'ms',
    'Filipino': 'tl',
    'Swahili': 'sw',
};

const isValidLanguage = (lang) => {
    return Object.values(languages).includes(lang);
};

module.exports = {
    languages,
    isValidLanguage,
};