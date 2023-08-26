/* CardMobile.jsx */

import { useLayoutEffect, useRef, useState } from 'react'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gsap } from 'gsap'
import { Link as RouterLink } from 'react-router-dom'
import useStackAnimation from '../animations/StackAnimation'
import CTAButton from './CTAButton'
import Paragraph from './Paragraph'

function CardMobile({ index, project, t }) {
  // Displays a project and its main features in a card tailored for small screens

  const { altText, description, isFinished, name, routeName, stack, thumbnail } = project
  const { cardRef, stackRef } = useStackAnimation()
  const [showImage, setShowImage] = useState(false)
  const buttonRef = useRef()
  const isEven = index % 2 === 0 ? true : false

  useLayoutEffect(() => {
    // Card animation
    // (the elements are targeted through 'refs' in order to trigger the
    // animations individually when more than one card is rendered)

    // Initial animation
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        translate: isEven ? '15%' : '-15%',
      },
      {
        opacity: 1,
        translate: '0%',
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: cardRef.current,
          start: '75% bottom',
        },
      }
    )
  }, [])

  return (
    <div
      className={`isolate max-w-md grid items-center ease-in-out
      ${showImage ? (isEven ? '-translate-x-[80%]' : 'translate-x-[80%]') : null}
      transition-transform duration-500`}
      ref={cardRef}
    >
      <div
        className={`${isEven ? 'translate-x-[80%]' : '-translate-x-[80%]'} relative
        col-span-full row-span-full -z-10 rounded-[0.5em] shadow-md overflow-hidden
        group`}
      >
        <img alt={t(altText)} className="aspect-video" src={thumbnail} />
        <div
          className={`absolute inset-0 h-full w-full px-4 opacity-0 from-[#000000a5]
          ${isEven ? 'bg-gradient-to-l items-end' : 'bg-gradient-to-r items-start'}
          to-transparent flex flex-col justify-center gap-1`}
          ref={stackRef}
        >
          {stack.map(({ tech, url }) => (
            <a
              className={`${isEven ? 'translate-x-[200%]' : '-translate-x-[200%]'}
              text-slate-50 text-sm font-semibold hover:underline underline-offset-2
              decoration-2`}
              href={url}
              key={tech}
              rel="noopener noreferrer"
              tabIndex="-1"
              target="_blank"
            >
              {tech}
            </a>
          ))}
        </div>
      </div>
      <div
        className={`${isEven ? null : 'flex-row-reverse'} m-auto col-span-full
        row-span-full flex items-center gap-2`}
      >
        <div className={`${isEven ? 'items-start' : 'items-end'} flex flex-col gap-4`}>
          {!isFinished && (
            <span
              className="text-xs font-bold leading-[0] font-mark-pro tracking-tight
              uppercase"
            >
              {t('pages.home.projects.inProgress')}
            </span>
          )}
          <h3 className="title-font text-[1.7rem] leading-6 dark:drop-shadow-md">
            {t(name)}
          </h3>
          <Paragraph
            className="p-4 rounded-[0.5em] border border-t-white dark:border-t-dark-6
            border-b-transparent border-x-transparent bg-slate-50 dark:bg-dark-5
            bg-opacity-[85%] dark:bg-opacity-[85%] backdrop-blur-[8px] shadow-xl"
            textSize="text-sm"
          >
            {t(description)}
          </Paragraph>
          <div className="flex gap-4">
            <RouterLink tabIndex="-1" to={routeName}>
              <CTAButton className="shadow-xl">
                {t('pages.home.projects.primaryButton')}
              </CTAButton>
            </RouterLink>
          </div>
        </div>
        <FontAwesomeIcon
          className={`px-2 py-2 text-xl text-dark-5 dark:text-slate-50 bg-slate-50
          dark:bg-dark-5 drop-shadow-md cursor-pointer transition duration-300
          rounded-lg bg-opacity-[85%] dark:bg-opacity-[85%] backdrop-blur-[8px]
          ${showImage ? (isEven ? 'rotate-180' : '-rotate-180') : null}`}
          icon={isEven ? faChevronLeft : faChevronRight}
          onClick={() => setShowImage((current) => !current)}
          ref={buttonRef}
        />
      </div>
    </div>
  )
}

export default CardMobile
