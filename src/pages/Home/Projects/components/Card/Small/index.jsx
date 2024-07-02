/* Small/index.jsx */

import { useRef, useState } from 'react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

import { useAnimate } from './animations/useAnimate'

import { Button } from '../../../../../../components/Button'
import { Paragraph } from '../../../../../../components/Text/Paragraph'
import { Tech } from '../components/Tech'

export function SmallCard({
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

  const normalizedIndex = index + 1

  const [showImage, setShowImage] = useState(false)
  const buttonRef = useRef(null)
  const navigate = useNavigate()
  const animation = useAnimate(index)

  return (
    <div
      className={`isolate max-w-md grid items-center ease-in-out transition-transform duration-500 group/card ${
        showImage &&
        `data-[parity=even]:translate-x-[80%]
         data-[parity=odd]:-translate-x-[80%]`
      }`}
      data-parity={normalizedIndex % 2 === 0 ? 'even' : 'odd'}
      ref={animation.scope}
    >
      {/* Image */}
      <div
        className="relative row-span-full col-span-full aspect-video rounded-lg shadow overflow-hidden cursor-pointer group/image
        group-data-[parity=even]/card:-translate-x-[80%]
        group-data-[parity=odd]/card:translate-x-[80%]"
        onClick={() => navigate(route)}
      >
        <img
          alt={t(thumbnail.altText)}
          className={`size-full select-none transition-all duration-300 ${
            showImage &&
            `group-data-[parity=even]/card:translate-x-12
             group-data-[parity=odd]/card:-translate-x-12
             delay-500`
          }`}
          src={thumbnail.src}
        />
        {/* Hidden tech stack list (appears on card hover) */}
        <ul
          className="absolute -z-10 top-0 w-12 h-full grid place-content-center gap-3 bg-accent list-none transition-transform duration-300 delay-500
          group-data-[parity=even]/card:left-0
          group-data-[parity=odd]/card:right-0"
        >
          {stack.map(({ id, ...props }) => (
            <Tech key={id} {...props} />
          ))}
        </ul>
      </div>

      {/* Text */}
      <div className="z-10 m-auto col-span-full row-span-full flex group-data-[parity=even]/card:flex-row-reverse items-center gap-2">
        <div
          className="flex flex-col gap-4
          group-data-[parity=even]/card:items-end
          group-data-[parity=odd]/card:items-start"
        >
          {inProgress && (
            <span className="text-xs font-black text-accent leading-[0] font-mark-pro tracking-widest uppercase animate-pulse color-transition">
              {t('pages.home.projects.inProgress')}
            </span>
          )}
          <h3 className="title-font text-[1.75rem] leading-6">{t(heading)}</h3>
          <Paragraph
            className="relative rounded-lg py-4 bg-slate-50 dark:bg-dark-2 overflow-hidden shadow-lg
            group-data-[parity=odd]/card:pl-[21px]
            group-data-[parity=odd]/card:pr-4
            group-data-[parity=even]/card:pl-4
            group-data-[parity=even]/card:pr-[21px]"
            variant="fixed-sm"
          >
            {t(description)}
            <span
              className="absolute top-0 w-[5px] h-full bg-accent color-transition
              group-data-[parity=odd]/card:left-0
              group-data-[parity=even]/card:right-0"
            ></span>
          </Paragraph>
          <Button
            callback={() => navigate(route)}
            className="shadow-lg"
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
            className={`transition-transform duration-300 delay-500 ease-in-out ${
              showImage
                ? `group-data-[parity=even]/card:rotate-180
                   group-data-[parity=odd]/card:rotate-0`
                : `group-data-[parity=even]/card:rotate-0
                   group-data-[parity=odd]/card:rotate-180`
            }`}
            icon={faChevronRight}
          />
        </Button>
      </div>
    </div>
  )
}
