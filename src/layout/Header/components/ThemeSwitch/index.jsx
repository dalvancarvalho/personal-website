/* ThemeSwitch/index.jsx */

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useTheme from '../../../../context/ThemeContext'

import Button from '../../../../components/Button'

function ThemeSwitch({ t }) {
  // Switches the theme between light and dark

  const { theme, switchTheme, SHORTCUT_KEY } = useTheme()

  return (
    <Button
      ariaLabel={t('header.theme.ariaLabel')}
      callback={switchTheme}
      shortcutKey={SHORTCUT_KEY}
      tooltip={
        theme === 'light' ? t('header.theme.hoverLight') : t('header.theme.hoverDark')
      }
      tooltipPosition="bottom-auto-l"
    >
      <div
        className={`w-6 h-7 flex flex-col justify-center gap-3 pointer-events-none transition-transform ease-elastic-out duration-500 ${
          theme === 'light'
            ? 'translate-y-1/2 [&>*:last-child]:opacity-0'
            : '-translate-y-1/2 [&>*:first-child]:opacity-0'
        }`}
      >
        <FontAwesomeIcon className="-rotate-[23deg] transition-opacity" icon={faSun} />
        <FontAwesomeIcon className="-rotate-[23deg] transition-opacity" icon={faMoon} />
      </div>
      <p className="sr-only">{t('header.theme.ariaLabel')}</p>
    </Button>
  )
}

export default ThemeSwitch
