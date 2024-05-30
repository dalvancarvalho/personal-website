/* Standard/index.jsx */

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

import useParallax from './hooks/useParallax'
import useAnimate from './animations/useAnimate'

import Button from '../../../../../../components/Button'
import Paragraph from '../../../../../../components/Text/Paragraph'
import Tech from '../components/Tech'

function Card({ description, index, isFinished, route, stack, t, thumbnail, title }) {
  // Displays a project and its main features in a modern looking card

  const isEven = index % 2 === 0 ? true : false

  const navigate = useNavigate()
  const parallax = useParallax()
  const animation = useAnimate()

  return (
    <div
      className="isolate max-w-md md:max-w-max grid grid-cols-12 gap-4"
      ref={animation.scope}
    >
      <div
        className={`relative row-span-full m-auto -z-10 aspect-video rounded-lg shadow-md overflow-hidden group ${
          isEven
            ? 'col-start-5 lg:col-start-6 col-end-13'
            : 'col-start-1 col-end-9 lg:col-end-8'
        }`}
        ref={animation.image}
      >
        <img
          alt={t(thumbnail.altText)}
          className="size-full group-hover:blur-[2px] duration-500"
          src={thumbnail.src}
        />
        <ul
          className={`absolute inset-0 size-full px-4 opacity-0 from-black/65 flex flex-col justify-center gap-2 ${
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
        className={`m-auto row-span-full flex ${
          isEven
            ? 'col-start-1 col-end-8 lg:col-end-7'
            : 'col-start-6 lg:col-start-7 col-end-13'
        }`}
        ref={animation.text}
      >
        <div
          className={`flex flex-col gap-4 ${isEven ? 'items-start' : 'items-end'}`}
          ref={parallax.card}
        >
          {!isFinished && (
            <span className="text-base font-bold leading-[0] font-mark-pro tracking-tight uppercase">
              {t('pages.home.projects.inProgress')}
            </span>
          )}
          <h3 className="title-font text-[2.25rem] leading-9">{t(title)}</h3>
          <Paragraph
            className="rounded-lg border border-t-white dark:border-t-dark-1 border-b-transparent border-x-transparent p-4 bg-slate-50 dark:bg-dark-2 backdrop-blur-[8px] shadow-xl"
            i18nKey={description}
            variant="small"
          />
          <Button
            callback={() => navigate(route)}
            className="shadow-xl"
            variant="primary"
          >
            {t('pages.home.projects.primaryButton')}
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

export default Card
