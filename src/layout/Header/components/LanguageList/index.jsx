/* LanguageList.jsx */

import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useLanguage from '../../../../context/LanguageContext'

import MenuList from '../MenuList'

import languages from '../../../../constants/languages'

function LanguageList(props) {
  // List of languages available for use (inside menu)

  const { t } = props

  const { language, setLanguage } = useLanguage()

  return (
    <div className="w-5/6">
      <MenuList title={t('header.language.heading')}>
        {languages.map((lang) => (
          <li
            className={`py-1.5 w-full cursor-pointer color-transition ${
              lang.id === language.id
                ? 'font-bold text-slate-800 dark:text-gray-200'
                : 'font-medium text-slate-500 dark:text-gray-400'
            }`}
            key={lang.id}
            onClick={() => setLanguage(lang)}
            onKeyDown={(event) => (event.code === 'Enter' ? setLanguage(lang) : null)}
            role="option"
            tabIndex="0"
          >
            <div className="flex items-center">
              <span className="ml-14 mr-4 w-6 pt-0.5 font-black text-base">
                {lang.id}
              </span>
              <span className="pt-1">{lang.name}</span>
            </div>
          </li>
        ))}
        <FontAwesomeIcon
          className={`absolute left-6 text-accent transition-all duration-300 ease-out ${
            language.id === 'PT' ? 'top-3' : 'top-14'
          }`}
          icon={faCaretRight}
        />
      </MenuList>
    </div>
  )
}

export default LanguageList
