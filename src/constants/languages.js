/* languages.js */

const LANGUAGES = [
  {
    id: 'PT',
    name: 'Português',
    value: 'ptBr',
  },
  {
    id: 'EN',
    name: 'English',
    value: 'enUs',
  },
]

const PT_BR = LANGUAGES[0]
const EN_US = LANGUAGES[1]

const SHORTCUT_KEY = 'l' // Used in combination with 'Ctrl' key to toggle the language

export { LANGUAGES as default, PT_BR, EN_US, SHORTCUT_KEY }
