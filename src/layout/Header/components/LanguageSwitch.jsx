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
      className="relative w-6 font-semibold text-lg"
      onClick={changeLanguage}
    >
      <div className="overflow-hidden">
        <p
          className={`w-6 h-7 2xl:h-6 flex flex-col justify-center 2xl:-space-y-1 ease-out transition-transform duration-300 ${
            language.id === 'PT' ? 'translate-y-1/2' : '-translate-y-1/2'
          }`}
        >
          <span>Pt</span>
          <span>En</span>
        </p>
      </div>
      <Tooltip shortcutKey={SHORTCUT_KEY}>
        <Trans>header.language.hover</Trans>
      </Tooltip>
    </Button>
  )
}

export default LanguageSwitch
