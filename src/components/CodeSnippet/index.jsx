/* CodeSnippet/index.jsx */

import { faCheck, faClone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useCodeSnippet from './hooks/useCodeSnippet'

import Button from '../Button'
import Paragraph from '../Text/Paragraph'

function CodeSnippet(props) {
  // Syntax highlighted code snippet for example purposes

  const { codeString, extension, language, title, t } = props

  const { copyToClipboard, isCopied } = useCodeSnippet(codeString)

  return (
    <div className="relative m-auto my-12 w-full md:w-5/6 xl:w-9/12 bg-slate-150 dark:bg-dark-3 rounded-md shadow-md overflow-hidden transition-[background-color] duration-300 ">
      <div className="px-5 h-10 2xl:h-12 flex justify-between items-center font-semibold overflow-hidden">
        <Paragraph
          className="!text-slate-800 dark:!text-gray-200"
          i18nKey={title}
          variant="sm-semibold"
        />
        <div
          className={`h-full flex flex-col justify-center items-end gap-[15px] 2xl:gap-5 transition-transform ease-elastic-out duration-500 ${
            isCopied
              ? '-translate-y-1/2 [&>*:first-child]:opacity-30'
              : 'translate-y-1/2 [&>*:last-child]:opacity-30'
          }`}
        >
          <Button
            ariaLabel={t('misc.codeSnippet.button.ariaLabel')}
            callback={copyToClipboard}
            className="flex items-center gap-2"
          >
            <Paragraph
              className="group-focus-visible/button:text-slate-800 group-focus-visible/button:dark:text-gray-200 code-snippet-button-hover"
              variant="sm-semibold"
              i18nKey="misc.codeSnippet.button.paragraph"
            />
            <FontAwesomeIcon className="2xl:text-lg" icon={faClone} />
            <p className="sr-only">{t('misc.codeSnippet.button.ariaLabel')}</p>
          </Button>
          <div className="flex items-center gap-2">
            <Paragraph
              className="!text-slate-800 dark:!text-gray-200"
              i18nKey="misc.codeSnippet.copied"
              variant="sm-semibold"
            />
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
      </div>
      <span className="absolute right-0 px-5 py-4 font-bold 2xl:text-lg text-slate-500 dark:text-gray-400 select-none pointer-events-none duration-300">
        {extension.toUpperCase()}
      </span>
      <pre
        className="p-5 bg-white dark:bg-dark-1 text-xs md:text-sm 2xl:text-base transition-[background-color] duration-300"
        tabIndex="-1"
      >
        <code className={`language-${language}`}>{codeString}</code>
      </pre>
    </div>
  )
}

export default CodeSnippet
