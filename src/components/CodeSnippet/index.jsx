/* CodeSnippet/index.jsx */

import { useEffect } from 'react'
import { faCheck, faClone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Prism from 'prismjs'
import { twMerge } from 'tw-merge'
import { useTranslation } from 'react-i18next'

import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'

import { Button } from '../Button'
import { Paragraph } from '../Text/Paragraph'

export function CodeSnippet({ className, codeString, extension, language, title }) {
  // Syntax highlighted code snippet

  const { copyToClipboard, isCopied } = useCopyToClipboard(codeString)
  const { t } = useTranslation()

  // Calls the highlight functionality when the component mounts
  useEffect(() => Prism.highlightAll(), [])

  return (
    <div
      className={`${className} relative mt-12 md:mt-16 md:m-auto w-screen md:w-5/6 ml-[50%] -translate-x-1/2 md:translate-x-0 bg-slate-150 dark:bg-dark-5 md:rounded-lg overflow-hidden transition-[background-color] duration-300`}
    >
      <div className="px-6 md:px-5 h-10 flex justify-between items-center font-semibold overflow-hidden">
        <Paragraph
          className="!text-slate-800 dark:!text-gray-200"
          i18nKey={title}
          variant="small-semibold"
        />
        <div
          className={`h-full flex flex-col justify-center items-end gap-5 md:gap-4 transition-transform ease-elastic-out duration-500 ${
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
              className="!text-slate-500 dark:!text-gray-400
              group-hover/button:!text-slate-800
              group-hover/button:dark:!text-gray-200
              group-focus-visible/button:!text-slate-800
              group-focus-visible/button:dark:!text-gray-200"
              i18nKey="misc.codeSnippet.button.paragraph"
              variant="small-semibold"
            />
            <FontAwesomeIcon icon={faClone} />
            <p className="sr-only">{t('misc.codeSnippet.button.ariaLabel')}</p>
          </Button>
          <div className="flex items-center gap-2">
            <Paragraph
              className="!text-slate-800 dark:!text-gray-200"
              i18nKey="misc.codeSnippet.copied"
              variant="small-semibold"
            />
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
      </div>
      {extension && (
        <span className="absolute right-0 p-6 md:p-5 text-xs md:text-sm font-bold text-slate-500 dark:text-gray-400 select-none pointer-events-none duration-300">
          {extension.toUpperCase()}
        </span>
      )}
      <pre
        className="p-6 md:p-5 bg-white dark:bg-dark-1 text-xs md:text-sm transition-[background-color] duration-300"
        tabIndex="-1"
      >
        <code className={`language-${language}`}>{codeString}</code>
      </pre>
    </div>
  )
}
