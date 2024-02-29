/* LanguageSwitch.jsx */

import { Trans } from 'react-i18next'

import useLanguage from '../../../context/LanguageContext'

import Button from '../../../components/Button'
import Tooltip from '../../../components/Tooltip'

function LanguageSwitch(props) {
  // Switches the display language between Brazilian Portuguese and English

  const { t } = props
  const { language, changeLanguage, SHORTCUT_KEY } = useLanguage()

  return (
    <Button
      ariaLabel={t('header.language.ariaLabel')}
      className="relative"
      onClick={changeLanguage}
    >
      <div className="overflow-hidden">
        <div
          className={`w-6 h-7 flex flex-col justify-center transition-transform ease-elastic-out duration-500 ${
            language.id === 'PT' ? 'translate-y-1/2' : '-translate-y-1/2'
          }`}
        >
          <span className="font-semibold text-lg">Pt</span>
          <span className="font-semibold text-lg">En</span>
        </div>
      </div>
      <p className="sr-only">{t('header.language.ariaLabel')}</p>
      <Tooltip shortcutKey={SHORTCUT_KEY}>
        <Trans>header.language.hover</Trans>
      </Tooltip>
    </Button>
  )
}

export default LanguageSwitch
