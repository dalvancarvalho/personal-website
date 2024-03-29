/* ThemeSwitch/index.jsx */

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useTheme from '../../../../context/ThemeContext'

import Button from '../../../../components/Button'

function ThemeSwitch(props) {
  // Switches the theme between light and dark

  const { t } = props

  const { theme, changeTheme, SHORTCUT_KEY } = useTheme()

  return (
    <Button
      ariaLabel={t('header.theme.ariaLabel')}
      callback={changeTheme}
      shortcutKey={SHORTCUT_KEY}
      tooltipContent={
        theme === 'light' ? t('header.theme.hoverLight') : t('header.theme.hoverDark')
      }
    >
      <div className="overflow-hidden">
        <div
          className={`w-6 h-7 flex flex-col justify-center gap-3 transition-transform ease-elastic-out duration-500 ${
            theme === 'light' ? 'translate-y-1/2' : '-translate-y-1/2'
          }`}
        >
          <FontAwesomeIcon className="-rotate-[23deg]" icon={faSun} />
          <FontAwesomeIcon className="-rotate-[23deg]" icon={faMoon} />
        </div>
      </div>
      <p className="sr-only">{t('header.theme.ariaLabel')}</p>
    </Button>
  )
}

export default ThemeSwitch
