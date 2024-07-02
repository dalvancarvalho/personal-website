/* LanguageList.jsx */

import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useLanguage } from '../../../../context/LanguageContext'

import { MenuList } from '../MenuList'

import { LANGUAGES } from '../../../../constants/languages'

export function LanguageList({ t }) {
  // List of languages available for use (inside menu)

  const { language, setLanguage } = useLanguage()

  return (
    <div className="w-5/6">
      <MenuList title={t('header.language.heading')}>
        {LANGUAGES.map((languageOption) => (
          <li
            className={`py-1.5 w-full cursor-pointer color-transition ${
              languageOption.value === language.value
                ? 'font-bold text-slate-800 dark:text-gray-200'
                : 'font-medium text-slate-500 dark:text-gray-400'
            }`}
            key={languageOption.value}
            onClick={() => setLanguage(languageOption)}
            onKeyDown={(event) =>
              event.code === 'Enter' ? setLanguage(languageOption) : null
            }
            role="option"
            tabIndex="0"
          >
            <div className="flex items-center">
              <span className="ml-14 mr-4 w-6 pt-0.5 font-black text-base">
                {languageOption.id}
              </span>
              <span className="pt-1">{languageOption.name}</span>
            </div>
          </li>
        ))}
        <FontAwesomeIcon
          className={`absolute left-6 text-accent transition-all ease-elastic-out duration-300 ${
            language.value === 'ptBr' ? 'top-3' : 'top-14'
          }`}
          icon={faCaretRight}
        />
      </MenuList>
    </div>
  )
}
