/* ResumeCard/index.jsx */

import { useState } from 'react'
import { faArrowDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useTheme from '../../../../../context/ThemeContext'

import Button from '../../../../../components/Button'
import Paragraph from '../../../../../components/Text/Paragraph'
import FormatSelector from './components/FormatSelector'

import resume from '../../../../../assets/svg/resume.svg'
import resumeDark from '../../../../../assets/svg/resume-dark.svg'

export default function ResumeCard({ href, t, title }) {
  // Downloadable resume

  const [format, setFormat] = useState('pdf')
  const { theme } = useTheme()

  return (
    <div className="max-w-max flex flex-col items-start group/card">
      <a
        className="relative mb-3 md:mb-4 rounded-md border-l-[5px] border-accent color-transition overflow-hidden group/link"
        href={href + format}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt={t('pages.resume.download.altText')}
          className="w-[295px] md:w-80 h-auto group-hover/link:blur-[2px] group-focus-visible/link:blur-[2px] group-hover/link:dark:brightness-50 group-focus-visible/link:dark:brightness-50 select-none transition-[filter] duration-300"
          src={theme === 'light' ? resume : resumeDark}
        />

        {/* Overlay displayed when the card is hovered on medium/large screens */}
        <div className="invisible md:visible">
          <div className="absolute inset-0 h-full w-1/4 -translate-x-full group-hover/link:translate-x-0 group-focus-visible/link:translate-x-0 grid place-items-center bg-accent !transition-all !duration-300">
            <FontAwesomeIcon
              className="-translate-x-[2px] text-white"
              icon={faArrowUpRightFromSquare}
              size="xl"
            />
          </div>
          <div className="absolute top-0 right-0 translate-x-12 group-hover/link:translate-x-0 group-focus-visible/link:translate-x-0 w-3/4 h-full grid place-items-center opacity-0 group-hover/link:opacity-100 group-focus-visible/link:opacity-100 transition-all duration-300">
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
            className="invisible md:visible -translate-y-2 group-hover/button:translate-y-0 group-focus-visible/button:translate-y-0 opacity-0 group-hover/button:opacity-100 group-focus-visible/button:opacity-100 transition-[transform,opacity] duration-300"
            icon={faArrowDown}
            size="sm"
          />
        </Button>
      </a>
    </div>
  )
}
