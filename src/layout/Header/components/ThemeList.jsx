/* ThemeList.jsx */

import { faMoon, faSun, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useTheme from '../../../context/ThemeContext'
import MenuList from './MenuList'
import themes from '../../../constants/themes'

function ThemeList({ t }) {
  // List of themes available for use (inside menu)

  const { theme, setTheme } = useTheme()

  return (
    <div className="w-5/6">
      <MenuList title={t('header.theme.heading')}>
        {themes.map((themeName) => (
          <li
            className={`${
              themeName === theme
                ? 'font-bold text-slate-800 dark:text-gray-200'
                : 'font-medium text-slate-500 dark:text-gray-400'
            }
            py-2 w-full cursor-pointer color-transition`}
            key={themeName}
            onClick={() => setTheme(themeName)}
            onKeyDown={(event) => (event.code === 'Enter' ? setTheme(themeName) : null)}
            role="option"
            tabIndex="0"
          >
            <div className="flex items-center">
              {themeName === theme && (
                <FontAwesomeIcon
                  className="ml-6 sm:ml-5 mr-[22px] sm:mr-[26px] text-accent
                  color-transition"
                  icon={faCaretRight}
                />
              )}
              <FontAwesomeIcon
                className={`${themeName !== theme ? 'ml-14' : null} mr-4 w-6
                -rotate-[23deg]`}
                icon={themeName === 'light' ? faSun : faMoon}
              />
              <span>{t(`header.theme.${themeName}`)}</span>
            </div>
          </li>
        ))}
      </MenuList>
    </div>
  )
}

export default ThemeList
