/* Default/index.jsx */

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

  const normalizedIndex = index + 1

  const navigate = useNavigate()
  const parallax = useParallax()
  const animation = useAnimate()

  return (
    <div
      className="isolate md:max-w-max grid grid-cols-12 gap-4 group/card"
      data-parity={normalizedIndex % 2 === 0 ? 'even' : 'odd'}
      ref={animation.scope}
    >
      {/* Image */}
      <div
        className="relative isolate row-span-full m-auto aspect-video rounded-lg overflow-hidden shadow group/image
           group-data-[parity=even]/card:col-start-1
           group-data-[parity=odd]/card:col-start-5
        lg:group-data-[parity=odd]/card:col-start-6
           group-data-[parity=even]/card:col-end-9
        lg:group-data-[parity=even]/card:col-end-8
           group-data-[parity=odd]/card:col-end-13"
        ref={animation.image}
      >
        <img
          alt={t(thumbnail.altText)}
          className="size-full select-none transition-[filter,transform] ease-out duration-300
          group-data-[parity=odd]/card:group-hover/image:-translate-x-14
          group-data-[parity=even]/card:group-hover/image:translate-x-14"
          src={thumbnail.src}
        />
        {/* Hidden tech stack list (appears on card hover) */}
        <ul
          className="absolute -z-10 top-0 w-14 h-full flex flex-col justify-center gap-4 bg-accent list-none transition-all duration-300
          group-data-[parity=even]/card:left-0
          group-data-[parity=odd]/card:right-0"
        >
          {stack.map(({ id, ...props }) => (
            <Tech key={id} {...props} />
          ))}
        </ul>
      </div>

      {/* Text */}
      <div
        className="m-auto flex row-span-full
           group-data-[parity=odd]/card:col-start-1
           group-data-[parity=even]/card:col-start-6
        lg:group-data-[parity=even]/card:col-start-7
           group-data-[parity=odd]/card:col-end-8
        lg:group-data-[parity=odd]/card:col-end-7
           group-data-[parity=even]/card:col-end-13"
        ref={animation.text}
      >
        {/* An extra div is needed for the parallax effect to work properly */}
        <div
          className="flex flex-col gap-4
          group-data-[parity=odd]/card:items-start
          group-data-[parity=even]/card:items-end"
          ref={parallax.card}
        >
          {inProgress && (
            <span className="text-base font-bold leading-[0] font-mark-pro tracking-tight uppercase">
              {t('pages.home.projects.inProgress')}
            </span>
          )}
          <h3 className="title-font text-[2.25rem] leading-9">{t(heading)}</h3>
          <Paragraph
            className="rounded-lg p-4 bg-slate-50 dark:bg-dark-2 shadow-lg
            group-data-[parity=odd]/card:border-l-[5px]
            group-data-[parity=even]/card:border-r-[5px]
            group-data-[parity=odd]/card:border-l-accent
            group-data-[parity=even]/card:border-r-accent"
            i18nKey={description}
            variant="small"
          />
          <Button
            callback={() => navigate(route)}
            className="shadow-lg dark:shadow-none"
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
