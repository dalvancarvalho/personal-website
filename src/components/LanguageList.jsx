/* LanguageList.jsx */

import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useLanguage from '../contexts/LanguageContext'
import MenuList from './MenuList'
import languages from '../constants/languages'

function LanguageList({ t }) {
  // List of languages available for use (inside menu)

  const { language, setLanguage } = useLanguage()

  return (
    <div className="w-5/6">
      <MenuList title={t('header.language.heading')}>
        {languages.map((lang) => (
          <li
            className={`${
              lang.id === language.id
                ? 'font-bold text-slate-800 dark:text-gray-200'
                : 'font-medium text-slate-500 dark:text-gray-400'
            }
            py-2 w-full cursor-pointer color-transition`}
            key={lang.id}
            onClick={() => setLanguage(lang)}
            onKeyDown={(event) => (event.code === 'Enter' ? setLanguage(lang) : null)}
            role="option"
            tabIndex="0"
          >
            <div className="flex items-center">
              {lang.id === language.id && (
                <FontAwesomeIcon
                  className="ml-6 sm:ml-5 mr-[22px] sm:mr-[26px] text-accent
                  color-transition"
                  icon={faCaretRight}
                />
              )}
              <span
                className={`${lang.id !== language.id ? 'ml-14' : null} mr-4 w-6
                font-black text-base text-center`}
              >
                {lang.id}
              </span>
              <span>{lang.name}</span>
            </div>
          </li>
        ))}
      </MenuList>
    </div>
  )
}

export default LanguageList
