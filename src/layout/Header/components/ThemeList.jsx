/* ThemeList.jsx */

import { faMoon, faSun, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useTheme from '../../../context/ThemeContext'

import MenuList from './MenuList'

import themes from '../../../constants/themes'

function ThemeList(props) {
  // List of themes available for use (inside menu)

  const { t } = props
  const { theme, setTheme } = useTheme()

  return (
    <div className="w-5/6">
      <MenuList title={t('header.theme.heading')}>
        {themes.map((themeName) => (
          <li
            className={`py-1.5 w-full cursor-pointer color-transition ${
              themeName === theme
                ? 'font-bold text-slate-800 dark:text-gray-200'
                : 'font-medium text-slate-500 dark:text-gray-400'
            }`}
            key={themeName}
            onClick={() => setTheme(themeName)}
            onKeyDown={(event) => (event.code === 'Enter' ? setTheme(themeName) : null)}
            role="option"
            tabIndex="0"
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                className="ml-14 mr-4 w-6 -rotate-[23deg]"
                icon={themeName === 'light' ? faSun : faMoon}
              />
              <span className="pt-1">{t(`header.theme.${themeName}`)}</span>
            </div>
          </li>
        ))}
        <FontAwesomeIcon
          className={`absolute left-6 text-accent transition-all duration-300 ease-out ${
            theme === 'light' ? 'top-3' : 'top-14'
          }`}
          icon={faCaretRight}
        />
      </MenuList>
    </div>
  )
}

export default ThemeList
