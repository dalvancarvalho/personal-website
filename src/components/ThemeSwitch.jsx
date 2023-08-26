/* ThemeSwitch.jsx */

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useTheme from '../contexts/ThemeContext'
import Button from './Button'
import Tooltip from './Tooltip'

function ThemeSwitch({ t }) {
  // Switches the theme between light and dark

  const { theme, changeTheme, SHORTCUT_KEY } = useTheme()

  return (
    <Button
      ariaLabel={t('header.theme.ariaLabel')}
      className="relative h-6 2xl:h-7"
      onClick={changeTheme}
    >
      <div className="overflow-hidden">
        <div
          className={`${theme === 'light' ? 'translate-y-1/2' : '-translate-y-1/2'}
          w-6 h-6 flex flex-col justify-center gap-2 2xl:gap-1.5 transition-transform
          duration-300`}
        >
          <FontAwesomeIcon className="-rotate-[23deg]" icon={faMoon} />
          <FontAwesomeIcon className="-rotate-[23deg]" icon={faSun} />
        </div>
      </div>
      <Tooltip shortcutKey={SHORTCUT_KEY}>
        {theme === 'light' ? t('header.theme.hoverLight') : t('header.theme.hoverDark')}
      </Tooltip>
    </Button>
  )
}

export default ThemeSwitch
