/* LanguageSwitch/index.jsx */

import useLanguage from '../../../../context/LanguageContext'

import Button from '../../../../components/Button'

function LanguageSwitch(props) {
  // Switches the display language between Brazilian Portuguese and English

  const { t } = props

  const { language, changeLanguage, SHORTCUT_KEY } = useLanguage()

  return (
    <Button
      ariaLabel={t('header.language.ariaLabel')}
      callback={changeLanguage}
      shortcutKey={SHORTCUT_KEY}
      tooltip={t('header.language.hover')}
      tooltipPosition="bottom-auto-l"
    >
      <div
        className={`w-6 h-7 flex flex-col justify-center pointer-events-none transition-transform ease-elastic-out duration-500 ${
          language.id === 'PT'
            ? 'translate-y-1/2 [&>*:last-child]:opacity-0'
            : '-translate-y-1/2 [&>*:first-child]:opacity-0'
        }`}
      >
        <span className="font-semibold text-lg transition-opacity">Pt</span>
        <span className="font-semibold text-lg transition-opacity">En</span>
      </div>
      <p className="sr-only">{t('header.language.ariaLabel')}</p>
    </Button>
  )
}

export default LanguageSwitch
