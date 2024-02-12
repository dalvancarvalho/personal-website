/* ThemeSwitch.jsx */

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useTheme from '../../../context/ThemeContext'
import Button from '../../../components/Button'
import Tooltip from '../../../components/Tooltip'

function ThemeSwitch(props) {
  // Switches the theme between light and dark

  const { t } = props
  const { theme, changeTheme, SHORTCUT_KEY } = useTheme()

  return (
    <Button
      ariaLabel={t('header.theme.ariaLabel')}
      className="relative h-6 2xl:h-7"
      onClick={changeTheme}
    >
      <div className="overflow-hidden">
        <div
          className={`w-6 h-6 flex flex-col justify-center gap-2 2xl:gap-1.5 transition-transform ease-out duration-300 ${
            theme === 'light' ? 'translate-y-1/2' : '-translate-y-1/2'
          }`}
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
