/* CodeSnippet/index.jsx */

import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Trans } from 'react-i18next'

import useCodeSnippet from './hooks/useCodeSnippet'

import Button from '../Button'
import Paragraph from '../Text/Paragraph'

function CodeSnippet(props) {
  // Syntax highlighted code snippet box for example purposes

  const { codeString, extension, language, title, t } = props

  const { copyToClipboard, isCopied } = useCodeSnippet(codeString)

  return (
    <div className="relative m-auto my-12 w-full md:w-5/6 xl:w-9/12 bg-slate-150 dark:bg-dark-3 rounded-lg shadow-md transition-[background-color] overflow-hidden duration-300">
      <div className="mx-5 h-10 2xl:h-12 flex justify-between items-center font-semibold">
        <Paragraph
          className="!text-slate-800 dark:!text-gray-200"
          i18nKey={title}
          variant="sm-semibold"
        />
        <div className="flex gap-4">
          {isCopied ? (
            <div className="flex items-center gap-2">
              <Paragraph
                className="!text-slate-800 dark:!text-gray-200"
                i18nKey="misc.codeSnippet.copied"
                variant="sm-semibold"
              />
              <FontAwesomeIcon icon={faCheck} />
            </div>
          ) : (
            <Button
              ariaLabel={t('misc.codeSnippet.button.ariaLabel')}
              callback={copyToClipboard}
              tooltipContent={<Trans>misc.codeSnippet.button.tooltip</Trans>}
              tooltipPosition="left"
            >
              <FontAwesomeIcon icon={faCopy} />
              <p className="sr-only">{t('misc.codeSnippet.button.ariaLabel')}</p>
            </Button>
          )}
        </div>
      </div>
      <span className="absolute right-0 px-5 py-4 font-bold 2xl:text-lg text-slate-500 dark:text-gray-400 select-none duration-300">
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
