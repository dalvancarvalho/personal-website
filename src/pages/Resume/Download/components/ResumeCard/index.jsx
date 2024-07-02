/* ResumeCard/index.jsx */

import { useState } from 'react'
import { faArrowDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

import { useTheme } from '../../../../../context/ThemeContext'

import { Button } from '../../../../../components/Button'
import { Paragraph } from '../../../../../components/Text/Paragraph'
import { FormatSelector } from './components/FormatSelector'

import resume from '../../../../../assets/svg/resume.svg'
import resumeDark from '../../../../../assets/svg/resume-dark.svg'

export function ResumeCard({ href, title }) {
  // Downloadable resume

  const [format, setFormat] = useState('pdf')
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <div className="max-w-max flex flex-col items-start group/card">
      <a
        className="relative mb-3 md:mb-4 rounded-lg color-transition overflow-hidden group/link"
        href={href + format}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt={t('pages.resume.download.altText')}
          className="w-[295px] translate-x-0.5 md:w-80 h-auto select-none transition-[filter] duration-300
          md:group-hover/link:blur-sm
          md:group-focus-visible/link:blur-sm
          md:group-hover/link:dark:brightness-50
          md:group-focus-visible/link:dark:brightness-50"
          src={theme === 'light' ? resume : resumeDark}
        />

        {/* Overlay displayed when the card is hovered in medium/large screens */}
        <div className="">
          <div
            className="absolute inset-0 h-full w-1/4 grid place-items-center bg-accent !transition-all !duration-300
               -translate-x-[92%]
            md:-translate-x-[94%]
            md:group-hover/link:translate-x-0
            md:group-focus-visible/link:translate-x-0"
          >
            <FontAwesomeIcon
              className="text-white"
              icon={faArrowUpRightFromSquare}
              size="xl"
            />
          </div>
          <div
            className="absolute top-0 right-0 w-3/4 h-full grid place-items-center opacity-0 transition-all duration-300
            md:translate-x-12
            md:group-hover/link:translate-x-0
            md:group-hover/link:opacity-100
            md:group-focus-visible/link:translate-x-0 
            md:group-focus-visible/link:opacity-100"
          >
            <Paragraph
              className="!text-black dark:!text-white"
              i18nKey="pages.resume.download.newTab"
              variant="fixed-lg-bold"
            />
          </div>
        </div>
      </a>

      {/* Card footer */}
      <div className="w-full px-2 flex items-center justify-between">
        <Paragraph
          className="!text-slate-800 dark:!text-gray-200"
          i18nKey={title}
          variant="medium-bold"
        />
        <FormatSelector format={format} setFormat={setFormat} />
      </div>
      <a className="mt-1 ml-2" download href={href + format} tabIndex="-1">
        <Button
          className="p-0 flex gap-2 md:text-base tracking-normal group/button"
          variant="secondary"
        >
          Download
          <FontAwesomeIcon
            className="invisible md:visible opacity-0 transition-[transform,opacity] duration-300
            -translate-y-2
            group-hover/button:translate-y-0
            group-hover/button:opacity-100
            group-focus-visible/button:translate-y-0 
            group-focus-visible/button:opacity-100"
            icon={faArrowDown}
            size="sm"
          />
        </Button>
      </a>
    </div>
  )
}
