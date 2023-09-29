/* DesktopCard/index.jsx */

import { Parallax } from 'react-scroll-parallax'
import { useNavigate } from 'react-router-dom'
import useCardAnimation from '../animations/useCardAnimation'
import useStackAnimation from '../animations/useStackAnimation'
import CallToAction from '../../Button/CallToAction'
import Paragraph from '../../Text/Paragraph'

function DesktopCard({ index, project, t }) {
  // Displays a project and its main features in a modern looking card

  const isEven = index % 2 === 0 ? true : false
  const { altText, description, isFinished, name, routeName, stack, thumbnail } = project
  const { imageRef, textRef } = useCardAnimation(isEven)
  const stackRef = useStackAnimation(imageRef)
  const navigate = useNavigate()

  return (
    <div className="isolate max-w-md md:max-w-max grid md:grid-cols-12 gap-4">
      <div
        className={`${
          isEven
            ? 'col-start-5 lg:col-start-6 col-end-13'
            : 'col-start-1 col-end-9 lg:col-end-8'
        }
        relative row-span-full m-auto -z-10 w-full h-full  rounded-[0.5em]
        shadow-md overflow-hidden group`}
        ref={imageRef}
      >
        <img
          alt={t(altText)}
          className="h-full group-hover:scale-110 group-hover:blur-[2px]
          duration-500"
          src={thumbnail}
        />
        <div
          className={`absolute inset-0 h-full w-full px-4 opacity-0 from-[#000000a5]
          ${isEven ? 'bg-gradient-to-l items-end' : 'bg-gradient-to-r items-start'}
          to-transparent flex flex-col justify-center gap-2`}
          ref={stackRef}
        >
          {stack.map(({ tech, url }) => (
            <a
              className={`${isEven ? 'translate-x-[200%]' : '-translate-x-[200%]'}
              text-slate-50 font-semibold hover:underline underline-offset-2
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
        className={`m-auto row-span-full flex ${
          isEven
            ? 'col-start-1 col-end-8 lg:col-end-7'
            : 'col-start-6 lg:col-start-7 col-end-13'
        }`}
        ref={textRef}
      >
        <Parallax
          className={`${isEven ? 'items-start' : 'items-end'}
          flex flex-col gap-4 2xl:gap-6`}
          speed={15}
        >
          {!isFinished && (
            <span
              className="text-base 2xl:text-lg font-bold leading-[0]
              2xl:leading-[0] font-mark-pro tracking-tight uppercase"
            >
              {t('pages.home.projects.inProgress')}
            </span>
          )}
          <h3
            className="title-font text-[2.25rem] 2xl:text-[2.75rem]
            leading-9 dark:drop-shadow-md"
          >
            {t(name)}
          </h3>
          <Paragraph
            className="p-[1em] rounded-[0.5em] border border-t-white dark:border-t-dark-6
            border-b-transparent border-x-transparent bg-slate-50 dark:bg-dark-5
            bg-opacity-[85%] dark:bg-opacity-[85%] backdrop-blur-[8px] shadow-xl"
            textSize="text-base 2xl:text-lg"
          >
            {t(description)}
          </Paragraph>
          <CallToAction className="shadow-xl" onClick={() => navigate(routeName)}>
            {t('pages.home.projects.primaryButton')}
          </CallToAction>
        </Parallax>
      </div>
    </div>
  )
}

export default DesktopCard
