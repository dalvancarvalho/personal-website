/* ThemeList/index.jsx */

import { faMoon, faSun, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useTheme from '../../../../context/ThemeContext'

import MenuList from '../MenuList'

import THEMES from '../../../../constants/themes'

function ThemeList(props) {
  // List of themes available for use (inside menu)

  const { t } = props

  const { theme, setTheme } = useTheme()

  return (
    <div className="w-5/6">
      <MenuList title={t('header.theme.heading')}>
        {THEMES.map((themeOption) => (
          <li
            className={`py-1.5 w-full cursor-pointer color-transition ${
              themeOption === theme
                ? 'font-bold text-slate-800 dark:text-gray-200'
                : 'font-medium text-slate-500 dark:text-gray-400'
            }`}
            key={themeOption}
            onClick={() => setTheme(themeOption)}
            onKeyDown={(event) => (event.code === 'Enter' ? setTheme(themeOption) : null)}
            role="option"
            tabIndex="0"
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                className="ml-14 mr-4 w-6 -rotate-[23deg]"
                icon={themeOption === 'light' ? faSun : faMoon}
              />
              <span className="pt-1">{t(`header.theme.${themeOption}`)}</span>
            </div>
          </li>
        ))}
        <FontAwesomeIcon
          className={`absolute left-6 text-accent transition-all ease-elastic-out duration-300 ${
            theme === 'light' ? 'top-3' : 'top-14'
          }`}
          icon={faCaretRight}
        />
      </MenuList>
    </div>
  )
}

export default ThemeList
