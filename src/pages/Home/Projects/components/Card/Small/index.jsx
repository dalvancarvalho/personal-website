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
  heading,
  index,
  inProgress,
  route,
  stack,
  t,
  thumbnail,
}) {
  // Displays a project and its main features in a card tailored for small screens

  const [showImage, setShowImage] = useState(false)
  const buttonRef = useRef(null)
  const navigate = useNavigate()
  const animation = useAnimate(index)

  return (
    <div
      className={`isolate max-w-md grid items-center ease-in-out transition-transform duration-500 group/card ${
        showImage &&
        `data-[parity=even]:-translate-x-[80%]
         data-[parity=odd]:translate-x-[80%]`
      }`}
      data-parity={index % 2 === 0 ? 'even' : 'odd'}
      ref={animation.card}
    >
      {/* Image */}
      <div
        className="relative row-span-full col-span-full aspect-video rounded-lg shadow-md overflow-hidden group/image
        group-data-[parity=even]/card:translate-x-[80%]
        group-data-[parity=odd]/card:-translate-x-[80%]"
      >
        <img
          alt={t(thumbnail.altText)}
          className="size-full grayscale group-hover/image:grayscale-0 select-none transition-[filter,transform] duration-300
          group-data-[parity=even]/card:group-hover/image:-translate-x-16
          group-data-[parity=odd]/card:group-hover/image:translate-x-16"
          src={thumbnail.src}
        />
        {/* Hidden tech stack list (appears on card hover) */}
        <ul
          className="absolute top-0 w-16 h-full grid place-content-center gap-3 bg-accent list-none transition-all duration-300
          group-data-[parity=even]/card:right-0
          group-data-[parity=odd]/card:left-0
          group-data-[parity=even]/card:translate-x-full
          group-data-[parity=odd]/card:-translate-x-full
          group-data-[parity]/card:group-hover/image:translate-x-0"
          ref={animation.stack}
        >
          {stack.map(({ id, ...props }) => (
            <Tech key={id} {...props} />
          ))}
        </ul>
      </div>

      {/* Text */}
      <div className="z-10 m-auto col-span-full row-span-full flex group-data-[parity=odd]/card:flex-row-reverse items-center gap-2">
        <div
          className="flex flex-col gap-4
          group-data-[parity=even]/card:items-start
          group-data-[parity=odd]/card:items-end"
        >
          {inProgress && (
            <span className="text-xs font-bold leading-[0] font-mark-pro tracking-tight uppercase">
              {t('pages.home.projects.inProgress')}
            </span>
          )}
          <h3 className="title-font text-[1.7rem] leading-6">{t(heading)}</h3>
          <Paragraph
            className="rounded-lg border border-t-white dark:border-t-dark-1 border-b-transparent border-x-transparent p-4 bg-slate-50 dark:bg-dark-2 shadow-lg"
            i18nKey={description}
            variant="fixed-sm"
          />
          <Button
            callback={() => navigate(route)}
            className="!shadow-lg"
            variant="primary"
          >
            {t('pages.home.projects.button')}
          </Button>
        </div>
        <Button
          className="rounded-lg px-2 py-1 text-xl !text-slate-800 dark:!text-gray-200 bg-slate-50 dark:bg-dark-2 shadow-lg color-transition"
          callback={() => setShowImage((current) => !current)}
          ref={buttonRef}
        >
          <FontAwesomeIcon
            className={`transition-transform duration-500 delay-300 ease-in-out ${
              showImage
                ? `group-data-[parity=even]/card:rotate-0
                   group-data-[parity=odd]/card:rotate-180`
                : `group-data-[parity=even]/card:rotate-180
                   group-data-[parity=odd]/card:rotate-0`
            }`}
            icon={faChevronRight}
          />
        </Button>
      </div>
    </div>
  )
}
