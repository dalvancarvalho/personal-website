/* ResumeCard/index.jsx */

import { useState } from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useScreenProps from '../../../../../hooks/useScreenProps'

import Button from '../../../../../components/Button'
import Paragraph from '../../../../../components/Text/Paragraph'
import FormatSelector from './components/FormatSelector'

export default function ResumeCard({ href, thumbnail, t, title }) {
  // Downloadable resume

  const [format, setFormat] = useState('pdf')
  const { screenSize } = useScreenProps()

  return (
    <div className="flex flex-col items-start group/card">
      <a
        className="relative mb-3 md:mb-4 rounded-md border-l-[5px] border-accent color-transition overflow-hidden group/image"
        href={href + format}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt={t('pages.resume.download.altText')}
          className="w-72 md:w-80 h-auto select-none"
          src={thumbnail}
        />
        {screenSize.md && (
          <div className="absolute inset-0 grid backdrop-blur-sm dark:backdrop-brightness-[25%] opacity-0 group-hover/image:opacity-100 group-focus-visible/image:opacity-100 transition-all duration-300">
            <Paragraph
              className="place-self-center flex items-center gap-3 !text-black dark:!text-white"
              variant="fixed-lg-semibold"
            >
              {t('pages.resume.download.newTab')}
              <FontAwesomeIcon className="rotate-45" icon={faArrowUp} size="sm" />
            </Paragraph>
          </div>
        )}
      </a>
      <div className="w-full px-2 flex items-center">
        <Paragraph
          className="flex-1 !text-slate-800 dark:!text-gray-200"
          i18nKey={title}
          variant="medium-bold"
        />
        <FormatSelector format={format} setFormat={setFormat} />
      </div>
      <a className="mt-1 ml-2" download href={href + format} tabIndex="-1">
        <Button className="p-0 md:text-base tracking-normal" variant="secondary">
          Download
        </Button>
      </a>
    </div>
  )
}
