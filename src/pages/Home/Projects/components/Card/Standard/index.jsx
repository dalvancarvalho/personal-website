/* Standard/index.jsx */

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

import useParallax from './hooks/useParallax'
import useAnimate from './animations/useAnimate'

import Button from '../../../../../../components/Button'
import Paragraph from '../../../../../../components/Text/Paragraph'
import Tech from '../components/Tech'

export default function Card({
  description,
  heading,
  index,
  inProgress,
  route,
  stack,
  t,
  thumbnail,
}) {
  // Displays a project and its main features in a modern looking card

  const navigate = useNavigate()
  const parallax = useParallax()
  const animation = useAnimate()

  return (
    <div
      className="isolate md:max-w-max grid grid-cols-12 gap-4 group/card"
      data-parity={index % 2 === 0 ? 'even' : 'odd'}
      ref={animation.scope}
    >
      {/* Image */}
      <div
        className="relative row-span-full m-auto aspect-video rounded-lg shadow-md overflow-hidden group/image
           group-data-[parity=even]/card:col-start-5
        lg:group-data-[parity=even]/card:col-start-6
           group-data-[parity=odd]/card:col-start-1
           group-data-[parity=even]/card:col-end-13
           group-data-[parity=odd]/card:col-end-9
        lg:group-data-[parity=odd]/card:col-end-8"
        ref={animation.image}
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
          group-data-[parity=even]/card:translate-x-[110%]
          group-data-[parity=odd]/card:-translate-x-[110%]
          group-data-[parity]/card:group-hover/image:translate-x-0"
          ref={animation.stack}
        >
          {stack.map(({ id, ...props }) => (
            <Tech key={id} {...props} />
          ))}
        </ul>
      </div>

      {/* Text */}
      <div
        className="m-auto flex row-span-full
           group-data-[parity=even]/card:col-start-1
           group-data-[parity=odd]/card:col-start-6
        lg:group-data-[parity=odd]/card:col-start-7
           group-data-[parity=even]/card:col-end-8
        lg:group-data-[parity=even]/card:col-end-7
           group-data-[parity=odd]/card:col-end-13"
        ref={animation.text}
      >
        {/* An extra div is needed for the parallax effect to work properly */}
        <div
          className="flex flex-col gap-4
          group-data-[parity=even]/card:items-start
          group-data-[parity=odd]/card:items-end"
          ref={parallax.card}
        >
          {inProgress && (
            <span className="text-base font-bold leading-[0] font-mark-pro tracking-tight uppercase">
              {t('pages.home.projects.inProgress')}
            </span>
          )}
          <h3 className="title-font text-[2.25rem] leading-9">{t(heading)}</h3>
          <Paragraph
            className="rounded-lg border border-t-white dark:border-t-dark-1 border-b-transparent border-x-transparent p-4 bg-slate-50 dark:bg-dark-2 shadow-lg"
            i18nKey={description}
            variant="small"
          />
          <Button
            callback={() => navigate(route)}
            className="!shadow-lg"
            variant="primary"
          >
            {t('pages.home.projects.button')}
            <FontAwesomeIcon
              className="absolute opacity-0 group-focus-visible/button:translate-x-2 group-focus-visible/button:opacity-100 fa-arrow-right-hover"
              icon={faArrowRight}
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
