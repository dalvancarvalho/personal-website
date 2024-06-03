/* Small/index.jsx */

import { useRef, useState } from 'react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

import useAnimate from './animations/useAnimate'

import Button from '../../../../../../components/Button'
import Paragraph from '../../../../../../components/Text/Paragraph'
import Tech from '../components/Tech'

export default function SmallCard({
  description,
  index,
  isFinished,
  route,
  stack,
  t,
  thumbnail,
  title,
}) {
  // Displays a project and its main features in a card tailored for small screens

  const isEven = index % 2 === 0 ? true : false

  const [showImage, setShowImage] = useState(false)
  const buttonRef = useRef(null)
  const navigate = useNavigate()
  const animation = useAnimate(isEven)

  return (
    <div
      className={`isolate max-w-md grid items-center ease-in-out transition-transform duration-500 ${
        showImage ? (isEven ? '-translate-x-[80%]' : 'translate-x-[80%]') : null
      }`}
      ref={animation.card}
    >
      <div
        className={`relative col-span-full row-span-full -z-10 aspect-video rounded-lg shadow-md overflow-hidden group ${
          isEven ? 'translate-x-[80%]' : '-translate-x-[80%]'
        }`}
      >
        <img alt={t(thumbnail.altText)} src={thumbnail.src} />
        <ul
          className={`absolute inset-0 size-full px-4 opacity-0 from-black/75 flex flex-col justify-center gap-0.5 ${
            isEven ? 'bg-gradient-to-l items-end' : 'bg-gradient-to-r items-start'
          }`}
          ref={animation.stack}
        >
          {stack.map((props) => (
            <Tech key={props.tech} isEven={isEven} {...props} />
          ))}
        </ul>
      </div>
      <div
        className={`m-auto col-span-full row-span-full flex items-center gap-2 ${
          isEven ? null : 'flex-row-reverse'
        }`}
      >
        <div className={`flex flex-col gap-4 ${isEven ? 'items-start' : 'items-end'}`}>
          {!isFinished && (
            <span className="text-xs font-bold leading-[0] font-mark-pro tracking-tight uppercase">
              {t('pages.home.projects.inProgress')}
            </span>
          )}
          <h3 className="title-font text-[1.7rem] leading-6">{t(title)}</h3>
          <Paragraph
            className="p-4 rounded-lg border border-t-white dark:border-t-dark-1 border-b-transparent border-x-transparent bg-slate-50 dark:bg-dark-2 backdrop-blur-[8px] shadow-xl"
            i18nKey={description}
            variant="fixed-sm"
          />
          <Button
            className="shadow-xl"
            callback={() => navigate(route)}
            variant="primary"
          >
            {t('pages.home.projects.primaryButton')}
          </Button>
        </div>
        <Button
          className="px-2 py-1 rounded-lg text-xl !text-slate-800 dark:!text-gray-200 bg-slate-50 dark:bg-dark-2 shadow-md color-transition"
          callback={() => setShowImage((current) => !current)}
          ref={buttonRef}
        >
          <FontAwesomeIcon
            // prettier-ignore
            className={`transition-transform duration-500 delay-300 ease-in-out ${
              isEven
                ? showImage
                  ? 'rotate-0'
                  : 'rotate-180'
                : showImage
                  ? 'rotate-180'
                  : 'rotate-0'
            }`}
            icon={faChevronRight}
          />
        </Button>
      </div>
    </div>
  )
}
