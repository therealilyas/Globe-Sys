import en from '../locales/en-EN.js'
import ru from '../locales/ru-RU.js'
import uz from '../locales/uz-UZ.js'

export const i18n = {
  loadLanguagesAsync: true,
  locales: ["en", 'ru', 'uz'],
  defaultLocale: 'ru',
  rootRedirect: 'ru',
  strategy: 'prefix',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    onlyOnRoot: true
  },
  vueI18n: {
    fallbackLocale: 'ru',
    messages: {en, ru, uz},
    warnHtmlInMessage: 'off',
    disableNoTranslationWarning: true,
    silentTranslationWarn: true
  }
}
